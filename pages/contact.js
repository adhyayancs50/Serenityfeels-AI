import React from 'react'
import Contact1 from '@/components/contact'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <>
    
        <Navbar/>
        <div className=' bg-gray-900 pt-28'>
        <h2 className="text-5xl font-bold w-fit mx-auto bg-clip-text text-transparent bg-gradient-to-r from-[#A3699E] to-[#7AA0E1]">
                  Contact Us
                </h2>
                </div>
        <Contact1/>
        <Footer/>

    </>
  )
}
