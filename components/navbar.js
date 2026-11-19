
// import { Link as ScrollLink } from "react-scroll";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useUser } from "@/context/user";
// import React, { useState } from "react";
// import { Capacitor } from "@capacitor/core";

// export default function Navbar({ home }) {
//   const router = useRouter();
//   const { appState, user } = useUser();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

//   // Show the dropdown
//   const showAboutDropdown = () => setIsAboutDropdownOpen(true);
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   // Hide the dropdown
//   const hideAboutDropdown = () => setIsAboutDropdownOpen(false);

//   // Toggle dropdown visibility
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   // Generalized function to handle navigation and scrolling
//   const handleNavLinkClick = (scrollTarget) => {
//     router.push(`/?scrollTo=${scrollTarget}`);
//   };

//   return (
//     <>
//       {Capacitor.getPlatform() === "web" && (
//         <nav className="fixed flex p-2 z-[150] text-white bg-[rgba(0,0,0,0.5)] w-full ">
//           <div className="flex w-1/3 h-full my-auto text-lg font-semibold">
//             <div className="h-8 w-8 flex-shrink-0">
//               <div className="gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full bg-white text-black">
//                 <img src="/logo.png" alt="Logo" />
//               </div>
//             </div>
//             <div className="grow pl-2 text-white overflow-hidden text-ellipsis whitespace-nowrap text-md text-token-text-primary">
//               Serenity
//             </div>
//           </div>

//           <div className="container flex-row hidden md:flex mx-auto items-center justify-between">
//             <div className="flex items-center justify-center mx-auto space-x-4">
//               <Link href="/">
//                 <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
//                   Home
//                 </div>
//               </Link>

//               <div className="relative">
//                 <div
//                   className="relative h-fit"
//                   onMouseEnter={showAboutDropdown}
//                   onMouseLeave={hideAboutDropdown}
//                 >
//                   {/* Dropdown button */}
//                   <div className="cursor-pointer flex items-center text-lg font-semibold hover:text-gray-300">
//                     About
//                     <svg
//                       className="ml-2 w-4 h-4 font-extrabold"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </div>

//                   {/* Dropdown menu */}
//                   {isAboutDropdownOpen && (
//                     <div className="">
//                       <div className="absolute left-0 py-2 w-40 bg-[#06101B] rounded-md shadow-xl z-50">
//                         <Link href="/collaborations">
//                           <div className="block px-4 py-2 text-sm capitalize text-white hover:bg-blue-500 hover:text-white">
//                             Collaborations
//                           </div>
//                         </Link>
//                         <Link href="/pricing">
//                           <div className="block px-4 py-2 text-sm capitalize text-white hover:bg-blue-500 hover:text-white">
//                             Pricing
//                           </div>
//                         </Link>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <Link href="/doctors">
//                 <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
//                   Doctors
//                 </div>
//               </Link>

//               <Link href="/dashboard?chat=ab736096-693e-465b-a0c5-92ca682a6ceb">
//                 <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
//                   Chatbot
//                 </div>
//               </Link>
//               <Link href="/resources">
//                 <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
//                   Resources
//                 </div>
//               </Link>
//               <Link href="/contact">
//                 <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
//                   Contact
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="flex md:hidden w-1/3 items-center justify-center mx-auto">
//             <div
//               className="group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary juice:text-token-text-secondary juice:rounded-lg juice:py-1.5 overflow-hidden whitespace-nowrap"
//               onClick={toggleMenu}
//             >
//               <div className="juice:text-token-text-secondary">
//                 ChatGPT
//               </div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 className="icon-md text-token-text-tertiary"
//               >
//                 <path
//                   fill="currentColor"
//                   fillRule="evenodd"
//                   d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </div>
//           </div>

//           {isMenuOpen && (
//             <div className="absolute rounded-lg shadow-lg h-fit">
//               <div className="md:hidden w-[100vw] mt-[3.25rem] bg-[rgba(0,0,0,0.5)] -m-2 text-center absolute z-[10000]">
//                 <div className="space-y-1">
//                   <Link href="/">
//                     <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                       Home
//                     </div>
//                   </Link>
//                   <Link href="/about">
//                     <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                       About
//                     </div>
//                   </Link>
//                   <Link href="/doctors">
//                     <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                       Doctors
//                     </div>
//                   </Link>
//                   <Link href="/dashboard?chat=ab736096-693e-465b-a0c5-92ca682a6ceb">
//                     <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                       Chatbot
//                     </div>
//                   </Link>
//                   <Link href="/resources">
//                     <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                       Resources
//                     </div>
//                   </Link>
//                   <Link href="/contact">
//                     <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                       Contact
//                     </div>
//                   </Link>
//                   {appState !== "dashboard" && (
//                     <div className="space-y-1">
//                       <Link
//                         href={"/login"}
//                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
//                       >
//                         Login
//                       </Link>
//                       <Link
//                         href={"/signup"}
//                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
//                       >
//                         Sign Up
//                       </Link>
//                     </div>
//                   )}
//                   {appState === "dashboard" && (
//                     <div className="space-y-1">
//                       <Link
//                         href="/profile"
//                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
//                       >
//                         Profile
//                       </Link>
//                       <Link
//                         href="/logout"
//                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
//                       >
//                         Log out
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//           {appState !== "dashboard" && (
//             <div className=" flex space-x-2 text-lg font-semibold">
//               <Link
//                 href={"/login"}
//                 className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
//               >
//                 <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                   Login
//                 </span>
//               </Link>
//               <Link
//                 href={"/signup"}
//                 className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
//               >
//                 <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap">
//                   Sign Up
//                 </span>
//               </Link>
//             </div>
//           )}
//           {appState === "dashboard" && (
//             <div className="flex w-1/3 text-lg font-semibold">
//               <div className="relative w-full justify-end mr- flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//                 <button
//                   type="button"
//                   className="flex justify-end text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//                   id="user-menu-button"
//                   aria-expanded={isDropdownOpen ? "true" : "false"}
//                   onClick={toggleDropdown} // Toggle dropdown visibility on click
//                 >
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     className="w-10 h-10 rounded-full object-cover"
//                     src={
//                       "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/1024px-Windows_10_Default_Profile_Picture.svg.png?20221210150350"
//                     }
//                     alt="user photo"
//                   />
//                   {user.photoURL}
//                 </button>
//                 <div
//                   className={`${
//                     isDropdownOpen ? "block" : "hidden"
//                   } absolute z-50 -bottom-[8.5rem] mt-2 w-48 py-2 bg-white rounded-md shadow-lg divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600`}
//                   style={{ right: 0 }} // Adjust this to position the dropdown as needed
//                   id="user-dropdown"
//                 >
//                   <div className="px-4 py-3">
//                     <span className="block text-sm text-gray-900 dark:text-white">
//                       {user.name}
//                     </span>
//                     <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
//                       {user.email}
//                     </span>
//                   </div>
//                   <ul className="py-1" aria-labelledby="user-menu-button">
//                     <Link href="/logout">
//                       <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
//                         Log out
//                       </div>
//                     </Link>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}
//         </nav>
//       )}

//       {/* Mobile menu */}
//       {/* {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link href="/">
//               <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                 Home
//               </div>
//             </Link>
//             <Link href="/about">
//               <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                 About
//               </div>
//             </Link>
//             <Link href="/doctors">
//               <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                 Doctors
//               </div>
//             </Link>
//             <Link href="/dashboard?chat=ab736096-693e-465b-a0c5-92ca682a6ceb">
//               <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                 Chatbot
//               </div>
//             </Link>
//             <Link href="/resources">
//               <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                 Resources
//               </div>
//             </Link>
//             <Link href="/contact">
//               <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                 Contact
//               </div>
//             </Link>
//             {appState !== "dashboard" && (
//               <div className="space-y-1">
//                 <Link
//                   href={"/login"}
//                   className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   href={"/signup"}
//                   className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
//                 >
//                   Sign Up
//                 </Link>
//               </div>
//             )}
//             {appState === "dashboard" && (
//               <div className="space-y-1">
//                 <Link
//                   href="/profile"
//                   className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
//                 >
//                   Profile
//                 </Link>
//                 <Link
//                   href="/logout"
//                   className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
//                 >
//                   Log out
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       )} */}
//     </>
//   );
// }




// import { Link as ScrollLink } from "react-scroll";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { useUser } from "@/context/user";
// import React, { useState } from "react";
// import { Capacitor } from "@capacitor/core";

// export default function Navbar({ home }) {
//   const router = useRouter();
//   const { appState, user } = useUser();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

//   // Show the dropdown
//   const showAboutDropdown = () => setIsAboutDropdownOpen(true);
//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   // Hide the dropdown
//   const hideAboutDropdown = () => setIsAboutDropdownOpen(false);

//   // Toggle dropdown visibility
//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   // Generalized function to handle navigation and scrolling
//   const handleNavLinkClick = (scrollTarget) => {
//     router.push(`/?scrollTo=${scrollTarget}`);
//   };

//   return (
//     <>
//       {Capacitor.getPlatform() === "web" && (
//         <nav className="fixed flex p-2 z-[150] text-white bg-[rgba(0,0,0,0.5)] w-full ">
//           <div className="flex w-1/3 h-full my-auto text-lg font-semibold">
//             <div className="h-8 w-8 flex-shrink-0">
//               <div className="gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full bg-white text-black">
//                 <img src="/logo.png" alt="Logo" />
//               </div>
//             </div>
//             <div className="grow pl-2 text-white overflow-hidden text-ellipsis whitespace-nowrap text-md text-token-text-primary">
//               Serenity
//             </div>
//           </div>

//           <div className="container flex-row hidden md:flex mx-auto items-center justify-between">
//             <div className="flex items-center justify-center mx-auto space-x-4">
//               <Link href="/">
//                 <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
//                   Home
//                 </div>
//               </Link>

//               <div className="relative">
//                 <div
//                   className="relative h-fit"
//                   onMouseEnter={showAboutDropdown}
//                   onMouseLeave={hideAboutDropdown}
//                 >
//                   {/* Dropdown button */}
//                   <div className="cursor-pointer flex items-center text-lg font-semibold hover:text-gray-300">
//                     About
//                     <svg
//                       className="ml-2 w-4 h-4 font-extrabold"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   </div>

//                   {/* Dropdown menu */}
//                   {isAboutDropdownOpen && (
//                     <div className="">
//                       <div className="absolute left-0 py-2 w-40 bg-[#06101B] rounded-md shadow-xl z-50">
//                         <Link href="/collaborations">
//                           <div className="block px-4 py-2 text-sm capitalize text-white hover:bg-blue-500 hover:text-white">
//                             Collaborations
//                           </div>
//                         </Link>
//                         <Link href="/pricing">
//                           <div className="block px-4 py-2 text-sm capitalize text-white hover:bg-blue-500 hover:text-white">
//                             Pricing
//                           </div>
//                         </Link>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <Link href="/doctors">
//                 <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
//                   Doctors
//                 </div>
//               </Link>

//               <Link href="/dashboard?chat=ab736096-693e-465b-a0c5-92ca682a6ceb">
//                 <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
//                   Chatbot
//                 </div>
//               </Link>
//               <Link href="/resources">
//                 <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
//                   Resources
//                 </div>
//               </Link>
//               <Link href="/contact">
//                 <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
//                   Contact
//                 </div>
//               </Link>
//             </div>
//           </div>

//           <div className="flex md:hidden w-1/3 items-center justify-center mx-auto">
//             <div
//               className="group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary juice:text-token-text-secondary juice:rounded-lg juice:py-1.5 overflow-hidden whitespace-nowrap"
//               onClick={toggleMenu}
//             >
//               <div className="juice:text-token-text-secondary">
//                 {router.pathname === "/" && "Home"}
//                 {router.pathname === "/about" && "About"}
//                 {router.pathname === "/doctors" && "Doctors"}
//                 {router.pathname === "/dashboard" && "Chatbot"}
//                 {router.pathname === "/resources" && "Resources"}
//                 {router.pathname === "/contact" && "Contact"}
//                 {router.pathname === "/login" && "Login"}
//                 {router.pathname === "/signup" && "Sign Up"}
//               </div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 className="icon-md text-token-text-tertiary"
//               >
//                 <path
//                   fill="currentColor"
//                   fillRule="evenodd"
//                   d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </div>
//           </div>

//           {isMenuOpen && (
//             <div className="absolute rounded-lg shadow-lg h-fit">
//               <div className="md:hidden w-[100vw] mt-[3.25rem] bg-[rgba(0,0,0,0.5)] -m-2 text-center absolute z-[10000]">
//                 <div className="space-y-1">
//                   <Link href="/">
//                     <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                       Home
//                     </div>
//                   </Link>
//                   <Link href="/about">
//                     <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                       About
//                     </div>
//                   </Link>
//                   <Link href="/doctors">
//                     <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                       Doctors
//                     </div>
//                   </Link>
//                   <Link href="/dashboard?chat=ab736096-693e-465b-a0c5-92ca682a6ceb">
//                     <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                       Chatbot
//                     </div>
//                   </Link>
//                   <Link href="/resources">
//                     <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                       Resources
//                     </div>
//                   </Link>
//                   <Link href="/contact">
//                     <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
//                       Contact
//                     </div>
//                   </Link>
//                   {appState !== "dashboard" && (
//                     <div className="space-y-1">
//                       <Link
//                         href={"/login"}
//                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
//                       >
//                         Login
//                       </Link>
//                       <Link
//                         href={"/signup"}
//                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
//                       >
//                         Sign Up
//                       </Link>
//                     </div>
//                   )}
//                   {appState === "dashboard" && (
//                     <div className="space-y-1">
//                       <Link
//                         href="/profile"
//                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
//                       >
//                         Profile
//                       </Link>
//                       <Link
//                         href="/logout"
//                         className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
//                       >
//                         Log out
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//           {appState !== "dashboard" && (
//             <div className=" flex space-x-2 text-lg font-semibold">
//               <Link
//                 href={"/login"}
//                 className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
//               >
//                 <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                   Login
//                 </span>
//               </Link>
//               <Link
//                 href={"/signup"}
//                 className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
//               >
//                 <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap">
//                   Sign Up
//                 </span>
//               </Link>
//             </div>
//           )}
//           {appState === "dashboard" && (
//             <div className="flex w-1/3 text-lg font-semibold">
//               <div className="relative w-full justify-end mr- flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//                 <button
//                   type="button"
//                   className="flex justify-end text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
//                   id="user-menu-button"
//                   aria-expanded={isDropdownOpen ? "true" : "false"}
//                   onClick={toggleDropdown} // Toggle dropdown visibility on click
//                 >
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     className="w-10 h-10 rounded-full object-cover"
//                     src={
//                       "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/1024px-Windows_10_Default_Profile_Picture.svg.png?20221210150350"
//                     }
//                     alt="user photo"
//                   />
//                   {user.photoURL}
//                 </button>
//                 <div
//                   className={`${
//                     isDropdownOpen ? "block" : "hidden"
//                   } absolute z-50 -bottom-[8.5rem] mt-2 w-48 py-2 bg-white rounded-md shadow-lg divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600`}
//                   style={{ right: 0 }} // Adjust this to position the dropdown as needed
//                   id="user-dropdown"
//                 >
//                   <div className="px-4 py-3">
//                     <span className="block text-sm text-gray-900 dark:text-white">
//                       {user.name}
//                     </span>
//                     <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
//                       {user.email}
//                     </span>
//                   </div>
//                   <ul className="py-1" aria-labelledby="user-menu-button">
//                     <Link href="/logout">
//                       <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
//                         Log out
//                       </div>
//                     </Link>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}
//         </nav>
//       )}
//     </>
//   );
// }



import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "@/context/user";
import React, { useState } from "react";
import { Capacitor } from "@capacitor/core";

export default function Navbar({ home }) {
  const router = useRouter();
  const { appState, user } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Show the dropdown
  const showAboutDropdown = () => setIsAboutDropdownOpen(true);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Hide the dropdown
  const hideAboutDropdown = () => setIsAboutDropdownOpen(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Generalized function to handle navigation and scrolling
  const handleNavLinkClick = (scrollTarget) => {
    router.push(`/?scrollTo=${scrollTarget}`);
  };

  return (
    <>
      {/* {Capacitor.getPlatform() === "web" && ( */}
        <nav className="fixed flex p-2 z-[150] text-white bg-[rgba(0,0,0,0.5)] w-full ">
          <div className="flex w-1/3 h-full my-auto text-lg font-semibold">
            <div className="h-8 w-8 flex-shrink-0">
              <div className="gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full bg-white text-black">
                <img src="/logo.png" alt="Logo" />
              </div>
            </div>
            <div className="grow pl-2 text-white overflow-hidden text-ellipsis whitespace-nowrap text-md text-token-text-primary">
              Serenity
            </div>
          </div>

          <div className="container flex-row hidden md:flex mx-auto items-center justify-between">
            <div className="flex items-center justify-center mx-auto space-x-4">
              <Link href="/">
                <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
                  Home
                </div>
              </Link>

              <div className="relative">
                <div
                  className="relative h-fit"
                  onMouseEnter={showAboutDropdown}
                  onMouseLeave={hideAboutDropdown}
                >
                  {/* Dropdown button */}
                  <div className="cursor-pointer flex items-center text-lg font-semibold hover:text-gray-300">
                    About
                    <svg
                      className="ml-2 w-4 h-4 font-extrabold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {/* Dropdown menu */}
                  {isAboutDropdownOpen && (
                    <div className="">
                      <div className="absolute left-0 py-2 w-40 bg-[#06101B] rounded-md shadow-xl z-50">
                        <Link href="/collaborations">
                          <div className="block px-4 py-2 text-sm capitalize text-white hover:bg-blue-500 hover:text-white">
                            Collaborations
                          </div>
                        </Link>
                        <Link href="/pricing">
                          <div className="block px-4 py-2 text-sm capitalize text-white hover:bg-blue-500 hover:text-white">
                            Pricing
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <Link href="/doctors">
                <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
                  Doctors
                </div>
              </Link>

              <Link href="/dashboard?chat=ab736096-693e-465b-a0c5-92ca682a6ceb">
                <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
                  Chatbot
                </div>
              </Link>
              <Link href="/resources">
                <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
                  Resources
                </div>
              </Link>
              <Link href="/contact">
                <div className="cursor-pointer text-lg font-semibold hover:text-gray-300">
                  Contact
                </div>
              </Link>
            </div>
          </div>

          <div className="flex md:hidden w-1/3 items-center justify-center mx-auto">
            <div
              className="group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-token-main-surface-secondary radix-state-open:bg-token-main-surface-secondary juice:text-token-text-secondary juice:rounded-lg juice:py-1.5 overflow-hidden whitespace-nowrap"
              onClick={toggleMenu}
            >
              <div className="juice:text-token-text-secondary">
                  Menu              
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                className="icon-md text-token-text-tertiary"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          {isMenuOpen && (
            <div className="absolute rounded-lg shadow-lg h-fit">
              <div className="md:hidden w-[100vw] mt-[3.25rem] bg-[rgba(0,0,0,0.5)] -m-2 text-center absolute z-[10000]">
                <div className="space-y-1">
                  {router.pathname !== "/" && (
                    <Link href="/">
                      <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                        Home
                      </div>
                    </Link>
                  )}
                  {/* {router.pathname !== "/about" && (
                    <Link href="/about">
                      <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                        About
                      </div>
                    </Link>
                  )} */}
                  {router.pathname !== "/doctors" && (
                    <Link href="/doctors">
                      <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                        Doctors
                      </div>
                    </Link>
                  )}
                  {router.pathname !== "/dashboard" && (
                    <Link href="/dashboard?chat=ab736096-693e-465b-a0c5-92ca682a6ceb">
                      <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                        Chatbot
                      </div>
                    </Link>
                  )}
                  {router.pathname !== "/resources" && (
                    <Link href="/resources">
                      <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                        Resources
                      </div>
                    </Link>
                  )}
                  {router.pathname !== "/contact" && (
                    <Link href="/contact">
                      <div className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700">
                        Contact
                      </div>
                    </Link>
                  )}
                  {appState !== "dashboard" && (
                    <>
                      {router.pathname !== "/login" && (
                        <Link
                          href={"/login"}
                          className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                        >
                          Login
                        </Link>
                      )}
                      {router.pathname !== "/signup" && (
                        <Link
                          href={"/signup"}
                          className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                        >
                          Sign Up
                        </Link>
                      )}
                    </>
                  )}
                  {appState === "dashboard" && (
                    <div className="space-y-1">
                      {/* {router.pathname !== "/profile" && (
                        <Link
                          href="/profile"
                          className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                        >
                          Profile
                        </Link>
                      )} */}
                      {router.pathname !== "/logout" && (
                        <Link
                          href="/logout"
                          className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                        >
                          Log out
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {appState !== "dashboard" && (
            <div className=" flex space-x-2 text-lg font-semibold">
              <Link
                href={"/login"}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Login
                </span>
              </Link>
              <Link
                href={"/signup"}
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap">
                  Sign Up
                </span>
              </Link>
            </div>
          )}
          {appState === "dashboard" && (
            <div className="flex w-1/3 text-lg font-semibold">
              <div className="relative w-full justify-end mr- flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button
                  type="button"
                  className="flex justify-end text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded={isDropdownOpen ? "true" : "false"}
                  onClick={toggleDropdown} // Toggle dropdown visibility on click
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/1024px-Windows_10_Default_Profile_Picture.svg.png?20221210150350"
                    }
                    alt="user photo"
                  />
                  {user.photoURL}
                </button>
                <div
                  className={`${
                    isDropdownOpen ? "block" : "hidden"
                  } absolute z-50 -bottom-[8.5rem] mt-2 w-48 py-2 bg-white rounded-md shadow-lg divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600`}
                  style={{ right: 0 }} // Adjust this to position the dropdown as needed
                  id="user-dropdown"
                >
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {user.name}
                    </span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                      {user.email}
                    </span>
                  </div>
                  <ul className="py-1" aria-labelledby="user-menu-button">
                    <Link href="/logout">
                      <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Log out
                      </div>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </nav>
      {/* )} */}
    </>
  );
}

