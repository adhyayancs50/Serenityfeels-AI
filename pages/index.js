// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <>
//       <div>
//       <div className="ml-12 w-full" dangerouslySetInnerHTML={{__html: message.content.replace(/\n/g, '<br/>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}}></div>
//       </div>
//     </>
//   );
// }




// import Image from "next/image";
// import { Inter } from "next/font/google";
// import Landingpage from "@/components/landingpage";
// import About from "@/components/about";
// import Missionvission from "@/components/missionvission";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import Banner from "@/components/banner";
// const inter = Inter({ subsets: ["latin"] });
// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
// import { scroller } from 'react-scroll';
// import Link from "next/link";
// import Faq from "@/components/faq";
// import Testimonials from "@/components/testimonial";
// import { Capacitor } from '@capacitor/core';
// import ServiceComponent from "@/components/services";
// import LandingDoctor from "@/components/landingDoctor";
// import LandingChatbot from "@/components/landingChatbot";
// import GiftMembershipPage from "@/components/GiftMembershipPage";
// import Pricing from "@/components/pricing";
// import Podcasts from "@/components/Podcasts";
// import Contact from "@/components/contact";
// export default function Home() {
//   const router = useRouter();
//   if(Capacitor.getPlatform() !== 'web'){
//     router.push(`/connect`);
//   }

//   // Sample text with parts to be bolded surrounded by **
//   const message = {
//     content: "This is a sample message with **bold text** in it. And here is another **bold phrase**. This **should also be bold**. Text without asterisks should remain normal.",
//   };
//   console.log("Home")
//   // useEffect(() => {
//   //   // Check if the scrollTo query parameter is present
//   //   if (router.query.scrollTo === 'about') {
//   //     // Use react-scroll or your preferred method to scroll to the "about" div
//   //     scroller.scrollTo('about', {
//   //       duration: 500,
//   //       delay: 0,
//   //       smooth: 'true',
//   //       offset:-60
//   //     });
//   //   }
//   // }, [router.query.scrollTo]); // Re-run the effect if the query parameter changes
//   useEffect(() => {
//     // This function is responsible for scrolling to the specified element
//     const scrollToElement = (elementId) => {
//       scroller.scrollTo(elementId, {
//         duration: 800,
//         delay: 0,
//         smooth: 'true',
//         offset:30
//       });
//     };

//     // If the scrollTo query parameter exists, call scrollToElement with its value
//     if (router.query.scrollTo) {
//       scrollToElement(router.query.scrollTo);
//     }
//   }, [router.query.scrollTo]); // This useEffect depends on the scrollTo query parameter


//   return (
//     <>
//   <div>
//     <Link  href="/dashboard?chat=ab736096-693e-465b-a0c5-92ca682a6ceb">
//     <div className="absolute z-[100] bottom-8 right-8 shadow-2xl flex-shrink-0">
//           <div className="gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full text-black"> <img src="/chat.svg" className="h-14 w-14 " alt="" /></div>
//         </div>
//         </Link>
//     <Navbar/>
//     <Landingpage/>
//     <ServiceComponent/>

//     <About/>
//     <LandingDoctor/>
//     <LandingChatbot/>
//     <GiftMembershipPage/>
//     <Testimonials/>

//     <Faq/>
//     <Contact/>
//     <Banner/>
//     <Footer/>
//   </div>
      
//     </>
//   );
// }
import Image from "next/image";
import { Inter } from "next/font/google";
import Landingpage from "@/components/landingpage";
import About from "@/components/about";
import Missionvission from "@/components/missionvission";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Banner from "@/components/banner";
const inter = Inter({ subsets: ["latin"] });
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { scroller } from 'react-scroll';
import Link from "next/link";
import Faq from "@/components/faq";
import Testimonials from "@/components/testimonial";
import { Capacitor } from '@capacitor/core';
import ServiceComponent from "@/components/services";
import LandingDoctor from "@/components/landingDoctor";
import LandingChatbot from "@/components/landingChatbot";
import GiftMembershipPage from "@/components/GiftMembershipPage";
import Pricing from "@/components/pricing";
import Podcasts from "@/components/Podcasts";
import Contact from "@/components/contact";
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [showPremiumMessage, setShowPremiumMessage] = useState(false);

  if (Capacitor.getPlatform() !== 'web') {
    router.push(`/connect`);
  }

  // Sample text with parts to be bolded surrounded by **
  const message = {
    content: "This is a sample message with **bold text** in it. And here is another **bold phrase**. This **should also be bold**. Text without asterisks should remain normal.",
  };
  console.log("Home");

  useEffect(() => {
    // This function is responsible for scrolling to the specified element
    const scrollToElement = (elementId) => {
      scroller.scrollTo(elementId, {
        duration: 800,
        delay: 0,
        smooth: 'true',
        offset: 30,
      });
    };

    // If the scrollTo query parameter exists, call scrollToElement with its value
    if (router.query.scrollTo) {
      scrollToElement(router.query.scrollTo);
    }
  }, [router.query.scrollTo]); // This useEffect depends on the scrollTo query parameter

  const handleWhatsAppClick = () => {
    setShowPremiumMessage(true);
    setTimeout(() => {
      setShowPremiumMessage(false);
    }, 2000);
  };

  return (
    <>
      <div>
        <Link href="/dashboard?chat=ab736096-693e-465b-a0c5-92ca682a6ceb">
          <div className="absolute z-[100] bottom-8 right-8 shadow-2xl flex-shrink-0">
            <div className="gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full text-black">
              <img src="/chat.svg" className="h-14 w-14" alt="" />
            </div>
          </div>
        </Link>

        <div className="absolute z-[100] bottom-8 left-8 shadow-2xl flex-shrink-0" onClick={handleWhatsAppClick}>
          <div className="gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full text-black p-1 bg-[#46EB63]">
            <img src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=w240-h480-rw" className="h-12 w-12 rounded-full" alt="WhatsApp" />
          </div>
        </div>

        {showPremiumMessage && (
          <div className="absolute z-[101] bottom-24 left-8 p-2 bg-white border border-gray-300 rounded shadow-lg">
            Only available for premium users
          </div>
        )}

        <Navbar />
        <Landingpage />
        <ServiceComponent />
        <About />
        <LandingDoctor />
        <LandingChatbot />
        <GiftMembershipPage />
        <Testimonials />
        <Faq />
        <Contact />
        <Banner />
        <Footer />
      </div>
    </>
  );
}
