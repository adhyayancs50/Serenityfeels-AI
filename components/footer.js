
import Link from "next/link";
import React from "react";
import { ScrollLink } from "react-scroll";
// components/Footer.js
export default function Footer() {
  return (
    <footer className="text-white bg-[#060F1B] body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-[20rem] flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <Link  href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white-900">
        <img className="w-12 h-12 rounded-full" src="./logofilled.jpeg" alt="" />
        <span className="ml-3 text-xl">Serenity</span>
      </Link>
      <p className="mt-2 text-sm text-white-500">
      Serenity is a mental health platform providing AI-driven support and human interaction. Through our a subscription-based plan for teenagers, we offer personalized feedback, access to various resources, and connections to professionals and empathetic survivors.
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/3 md:w-1/2  w-full p-4">
        <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">About Us</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="/" className="text-white-600 hover:text-white-800">Mission</Link>
          </li>
          <li>
            <Link href="/" className="text-white-600 hover:text-white-800">Vision</Link>
          </li>
          <li>
            <Link href="/" className="text-white-600 hover:text-white-800">Team</Link>
          </li>
          <li>
            <Link href="/collaborations" className="text-white-600 hover:text-white-800">Collaborations</Link>
          </li>
        </nav>
      </div>

      <div className="lg:w-1/3 md:w-1/2 w-full p-4">
        <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">Explore</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="/dashboard" className="text-white-600 hover:text-white-800">Empathia</Link>
          </li>
          <li>
            <Link href="/doctors" className="text-white-600 hover:text-white-800">Professionals</Link>
          </li>
          <li>
            <Link href="/resources" className="text-white-600 hover:text-white-800">Podcast</Link>
          </li>
          <li>
            <Link href="/" className="text-white-600 hover:text-white-800">Gift</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full p-4">
        <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">Support</h2>
        <nav className="list-none mb-10">
          <li>
            <Link href="/contact" className="text-white-600 hover:text-white-800">Help</Link>
          </li>
          <li>
            <Link href="/" className="text-white-600 hover:text-white-800">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/" className="text-white-600 hover:text-white-800">Security</Link>
          </li>
          <li>
            <a href="/T&C.pdf" target="_blank" rel="noopener noreferrer" alt="Terms and Conditions" className="text-white-600 hover:text-white-800">Terms and Conditions</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="text-white bg-[#060F1B]">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-white-500 text-sm text-center sm:text-left">© 2024 Serenity — Raghav Garg
        <Link href="" rel="noopener noreferrer" className="text-white-600 ml-1" target="_blank"></Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link href="/" className="text-white-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </Link>
        <Link href="/" className="ml-3 text-white-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </Link>
        <Link href="/" className="ml-3 text-white-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </Link>
        <Link href="/" className="ml-3 text-white-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
    </div>
  </div>
</footer>
  );
}
