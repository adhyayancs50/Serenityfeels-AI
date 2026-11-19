// import React, { useState, useEffect } from "react";
// import "aos/dist/aos.css";
// import AOS from "aos";

// const teamMembers = {
//   "Aryan Agarwal": {
//     name: "Aryan",
//     role: "CEO",
//     description:
//       "In my relentless pursuit of perfection, I found myself trapped in a ceaseless cycle of high expectations and self-imposed pressure. Despite external success, the toll on my mental well-being became evident with heightened stress and anxiety. This realization led me to launch a mental health business, driven by the understanding that many individuals silently grapple with similar challenges. The goal is to establish a space that not only acknowledges but actively addresses the crucial importance of mental health.",
//     shortDescription:
//       "His punctuality and perfectionism drive precision and excellence, ensuring timely execution and propelling Serenity to new heights.",
//     imageUrl: "/ap.jpeg",
//     oneliner:"Driven, Punctual, and Precise"

//   },
//   "Avani Patri": {
//     name: "Avani",
//     shortDescription:
//       "Infusing design flair and business passion, she propels Serenity's outreach through creative innovation and strategic vision.",

//     role: "CMO",
//     description:
//       'During the two years of online classes in Grade 8 and 9, I rarely engaged with classmates or neighborhood friends, remaining occupied with studying, online classes, and reading books. Transitioning back to offline school in Grade 10, I felt out of place and lonely. The feeling of isolation intensified when my birthday was forgotten by those I considered friends. In response, I co-founded "Serenity," a platform addressing teenage mental health struggles in a private space, born from our own experiences and a commitment to supporting others facing similar difficulties.',
//     imageUrl: "/ap.jpeg",
//     oneliner:"Creative, Hardworking, and Perfectionist"

//   },
//   "Raghav Garg": {
//     name: "Raghav",
//     shortDescription:
//       "An experienced web developer committed to crafting flawless, user-friendly websites.",

//     role: "CTO",
//     description:
//       "I am constantly compared to my academically successful sister, and the pressure to live up to her achievements can be tough to handle. I have kept these feelings to myself because I don't want to let my family down. That's why I appreciate Serenity—it's like a safe haven where I can finally talk about these struggles without the fear of being judged. In Serenity, I find the freedom to express my concerns and navigate the expectations set by my sister's success. It's a comforting space where I can be real about the challenges I face without feeling weighed down.",
//     imageUrl: "/rg.jpeg",
//     oneliner:"Tech-savvy, Efficient, and Versatile"

//   },
//   // Add more team members here
// };
// const teamMembers1 = {
//   "Laksh Sarda": {
//     name: "Laksh",
//     shortDescription:
//       "His analytical acumen, algorithmic finesse, and prowess in Math steer Serenity's financial success.",

//     role: "CFO",
//     description:
//       "Before my 10th board examinations, I experienced immense pressure from teachers and family to excel. Hesitant to share my struggles and appear weak, I refrained from discussing the issue with them. This hesitation fueled my desire to co-found Serenity, a platform enabling individuals like myself to connect with psychiatrists and engage with a specialized ChatBot that offers support without judgment or scrutiny.",
//     imageUrl: "/ls.jpeg",
//     oneliner:"Strategic, Mathematical and Humble"
//   },
//   "Kashni Tiwary": {
//     name: "Kashni",
//     shortDescription:
//       "A music lover, business enthusiast, and strategic powerhouse driving Serenity's efficiency and operational innovation.",
//     role: "COO",
//     description:
//       "After moving to Jaipur recently, I experienced bullying due to my accent, which left me feeling vulnerable and powerless, leading to a period of low self-esteem and depression. Fortunately, with the support of my parents and teachers, I overcame these challenges and eventually formed meaningful connections. This personal journey has become a driving force behind my decision to join Serenity. I am committed to ensuring that no one goes through the isolation and hardships I faced. My goal is to create a supportive environment where individuals never have to feel alone, emphasizing the importance of empathy and understanding.",
//     imageUrl: "/kt.jpeg",
//     oneliner:"Passionate, Visionary, and Persuasive"

//   },
//   // Add more team members here
// };
// export default function Team() {
//   useEffect(() => {
//     AOS.init();
//   }, []);
//   const [currentMember, setCurrentMember] = useState(null);
//   const [isModal, setIsModal] = useState(false);
//   const [hoveredMember, setHoveredMember] = useState(null);

//   const handleMemberClick = (member) => {
//     setCurrentMember(member);
//     setIsModal(true);
//   };

//   return (
//     <div id="team" className="bg-white">
//       <div className="text-center py-12">
//         <h2 className="text-5xl font-light text-gray-900">Team</h2>
//       </div>

//       <section className="">
//         <div className="py-8 mx-auto max-w-screen-xl text-center">
//           <div className="grid gap-8 overflow-visible lg:gap-16 md:grid-cols-3">
//           {Object.values(teamMembers).map((member, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleMemberClick(member)}
//                 className="relative cursor-pointer overflow-visible"
//                 data-aos="fade-up"
//                 data-aos-delay={`${index * 100}`}
//               >
//                 <div
//                 onMouseEnter={() => setHoveredMember(member.name)}
//                 onMouseLeave={() => setHoveredMember(null)}

//                   className="transition-transform duration-300 ease-in-out transform hover:scale-125"
//                 >
//                   <img

//                     className="mx-auto w-52 h-52 rounded-full"
//                     src={member.imageUrl}
//                     alt={member.name}
//                   />
//                   <h3
//                     className={`${
//                       hoveredMember === member.name ? "visible" : "invisible"
//                     } mb-1 text-xl font-bold tracking-tight text-gray-900`}
//                   >
//                     {member.name}
//                   </h3>
//                   <p
//                     className={`text-lg ${
//                       hoveredMember === member.name ? "visible" : "invisible"
//                     } text-gray-700`}
//                   >
//                     {member.role}
//                   </p>
//                   <p
//                     className={`text-md ${
//                       hoveredMember === member.name ? "visible" : "invisible"
//                     } text-gray-500`}
//                   >
//                     {member.oneliner}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="grid mt-16 mb-8 md:gap-0 md:w-[65vw] mx-auto md:grid-cols-2">
//           {Object.values(teamMembers1).map((member, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleMemberClick(member)}
//                 className="relative cursor-pointer overflow-visible"
//                 data-aos="fade-up"
//                 data-aos-delay={`${index * 100}`}
//               >
//                 <div
//                 onMouseEnter={() => setHoveredMember(member.name)}
//                 onMouseLeave={() => setHoveredMember(null)}

//                   className="transition-transform duration-300 ease-in-out transform hover:scale-125"
//                 >
//                   <img

//                     className="mx-auto w-52 h-52 rounded-full"
//                     src={member.imageUrl}
//                     alt={member.name}
//                   />
//                   <h3
//                     className={`${
//                       hoveredMember === member.name ? "visible" : "invisible"
//                     } mb-1 text-xl font-bold tracking-tight text-gray-900`}
//                   >
//                     {member.name}
//                   </h3>
//                   <p
//                     className={`text-lg ${
//                       hoveredMember === member.name ? "visible" : "invisible"
//                     } text-gray-700`}
//                   >
//                     {member.role}
//                   </p>
//                   <p
//                     className={`text-md ${
//                       hoveredMember === member.name ? "visible" : "invisible"
//                     } text-gray-500`}
//                   >
//                     {member.oneliner}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {isModal && currentMember && (
// <div
//   className="fixed inset-0 z-10 flex items-center justify-center"
//   aria-labelledby="modal-title"
//   role="dialog"
//   aria-modal="true"
// >
//   <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"></div>
//   <div className="relative z-10 w-full max-w-[40rem]  overflow-y-auto">
//     <div className="flex flex-col items-center  justify-center p-4">
//       <div className="relative w-full md:p-24 p-12 overflow-hidden  bg-white rounded-lg shadow-xl">
//         {/* Close Button */}
//         <button
//           onClick={() => setIsModal(false)}
//           className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 text-white bg-red-500 rounded-full focus:outline-none"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-4 h-4"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//         <h2 className="  text-center font-bold text-[1.1rem]">
//           About {currentMember.name}
//         </h2>
//         <div className="text-[1rem] text-gray-500">
//           {currentMember.shortDescription}
//         </div>
//         <br />
//         <h5 className="font-bold text-[1.1rem]">Journey:</h5>
//         <div className="text-[1rem] text-gray-500">
//           {currentMember.description}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//       )}
//     </div>
//   );
// }
// pages/team.js or pages/team/index.js
// pages/team.js or pages/team/index.js

// pages/team.js or pages/team/index.js
// pages/team.js or pages/team/index.js

// pages/team.js or pages/team/index.js

// import Head from "next/head";
// import Image from "next/image";
// import {
//   FaFacebookF,
//   FaPinterestP,
//   FaInstagram,
//   FaBehance,
// } from "react-icons/fa";
// import Link from "next/link";
// export default function Team() {
//   return (
//     <>
//       <Head>
//         <title>Team Members</title>
//       </Head>

//       <div className="bg-gray-100 py-12">
//         <div className="container mx-auto px-4">
//           <div className="text-center pb-12">
//             <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
//               Team Members
//             </h2>
//             <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl">
//               Ruya is perfect for building your dream landing page website
//               without any coding whatsoever.
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-8">
//             {/* Repeat this block for each team member */}
//             <div className="team-member">
//               <div className="relative">
//                 <img
//                   src="/ap.jpeg"
//                   alt="Team Member"
//                   className="object-cover rounded-lg"
//                 />
//                 <div className="overlay">
//                   <div className="flex gap-2 h-full w-full p-4">
//                     {" "}
//                     <Link href="https//:facebook.com" className="p-3 w-fit h-fit rounded-full text-white bg-[#5BC7FF]">
//                       {" "}
//                       <FaFacebookF />
//                     </Link>
//                     <Link href="https//:facebook.com" className="p-3 w-fit h-fit rounded-full text-white bg-[#5BC7FF]">
//                       {" "}
//                       <FaFacebookF />
//                     </Link>
//                     <Link href="https//:facebook.com" className="p-3 w-fit h-fit rounded-full text-white bg-[#5BC7FF]">
//                       {" "}
//                       <FaFacebookF />
//                     </Link>
// <Link href="https//:facebook.com" className="p-3 w-fit h-fit rounded-full text-white bg-[#5BC7FF]">
//   {" "}
//   <FaFacebookF />
// </Link>
//                   </div>
//                   {/* More social icons */}
//                 </div>
//               </div>
//               <p className="name">Mahmoud Zaghloul</p>
//               <p className="title">Marketing Manager</p>
//             </div>
//             {/* ... other team members */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import Head from "next/head";
import Image from "next/image";
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaBehance,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Link from "next/link";

const teamMembers = [
  {
    name: "Aryan Agarwal",
    role: "CEO",
    imageUrl: "/aa.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/aryan-agarwal-325520297/",
      email: "mailto:aryanagarwal1812@gmail.com",
      instagram: "https://www.instagram.com/aryanagarwal182/",
      phone: "tel:+917014593369",
    },
    oneliner: "Driven, Punctual, and Precise",
    // Add the rest of the member details if needed
  },
  {
    name: "Avani Patri",
    role: "CMO",
    imageUrl: "/ap.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/avani-patri-8ab1192b6/",
      email: "mailto:avani260907@gmail.com",
      instagram: "ap_rocks101.instagram.com/ap_rocks101/",
      phone: "tel:+919929612614",
    },
    oneliner: "Driven, Punctual, and Precise",
    // Add the rest of the member details if needed
  },
  {
    name: "Raghav Garg",
    role: "CTO",
    imageUrl: "/rg.png",
    socials: {
      // facebook: "https://facebook.com/aryan",
      // pinterest: "https://pinterest.com/aryan",
      instagram: "https://www.instagram.com/raghavgarg4833/?utm_source=ig_web_button_share_sheet",

      email: "mailto:raghav18280@gmail.com",
      phone: "tel:+919116368987",
    },
    oneliner: "Driven, Punctual, and Precise",
    // Add the rest of the member details if needed
  },
  {
    name: "Laksh Sarda",
    role: "CFO",
    imageUrl: "/ls.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/laksh-sarda-2343a62b5/",
      email: "mailto:lakshsarda137@gmail.com",
      phone: "tel:+917413007480",
    },
    oneliner: "Driven, Punctual, and Precise",
    // Add the rest of the member details if needed
  },
  // {
  //   name: "Anika Bhargava",
  //   role: "",
  //   imageUrl: "/ab.png",
  //   socials: {
  //     linkedin: "https://www.linkedin.com/in/anika-bhargava-mathur-a37b7b264",
  //     email: "mailto:abhargava1@jpischool.com",
  //     phone: "tel:+919116640860",
  //   },
  //   oneliner: "Driven, Punctual, and Precise",
  //   // Add the rest of the member details if needed
  // },
  // {
  //   name: "Kashni Tiwary",
  //   role: "COO",
  //   imageUrl: "/kt.png",
  //   socials: {
  //     linkedin: "https://www.linkedin.com/in/kashni-tiwary-0b7023260/",
  //     email: "mailto:kashnitiwary23gmail.com",
  //     instagram: "https://www.instagram.com/kashni.tiwary/",
  //     phone: "tel:+917498426234",
  //   },
  //   oneliner: "Driven, Punctual, and Precise",
  //   // Add the rest of the member details if needed
  // },
  // ... other team members
];
const teamMembers1 = [
  {
    name: "Ahsash Agarwal",
    role: "Head of Logistics",
    imageUrl: "/aa1.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/aryan-agarwal-325520297/",
      email: "mailto:aryanagarwal1812@gmail.com",
      instagram: "https://www.instagram.com/aryanagarwal182/",
      phone: "tel:+917014593369",
    },
    oneliner: "Driven, Punctual, and Precise",
    // Add the rest of the member details if needed
  },
  {
    name: "Anjika Fatepuria",
    role: "President",
    imageUrl: "/af.jpeg",
    // socials: {
    //   linkedin: "https://www.linkedin.com/in/avani-patri-8ab1192b6/",
    //   email: "mailto:avani260907@gmail.com",
    //   instagram: "ap_rocks101.instagram.com/ap_rocks101/",
    //   phone: "tel:+919929612614",
    // },
    oneliner: "Driven, Punctual, and Precise",
    // Add the rest of the member details if needed
  },
  {
    name: "Anika Bhargava",
    role: "COO",
    imageUrl: "/ab.png",
    socials: {
      // facebook: "https://facebook.com/aryan",
      // pinterest: "https://pinterest.com/aryan",
      instagram: "https://www.instagram.com/raghavgarg4833/?utm_source=ig_web_button_share_sheet",

      email: "mailto:raghav18280@gmail.com",
      phone: "tel:+919116368987",
    },
    oneliner: "Driven, Punctual, and Precise",
    // Add the rest of the member details if needed
  },
  {
    name: "Vanshika Nanda",
    role: "Design head",
    imageUrl: "/vn.jpeg",
    socials: {
      linkedin: "https://www.linkedin.com/in/laksh-sarda-2343a62b5/",
      email: "mailto:lakshsarda137@gmail.com",
      phone: "tel:+917413007480",
    },
    oneliner: "Driven, Punctual, and Precise",
    // Add the rest of the member details if needed
  },
  
  // {
  //   name: "Kashni Tiwary",
  //   role: "COO",
  //   imageUrl: "/kt.png",
  //   socials: {
  //     linkedin: "https://www.linkedin.com/in/kashni-tiwary-0b7023260/",
  //     email: "mailto:kashnitiwary23gmail.com",
  //     instagram: "https://www.instagram.com/kashni.tiwary/",
  //     phone: "tel:+917498426234",
  //   },
  //   oneliner: "Driven, Punctual, and Precise",
  //   // Add the rest of the member details if needed
  // },
  // ... other team members
];
export default function Team() {
  return (
    <>

      <div className="bg-gray-100 pt-12 pb-24">
        <div className=" mx-auto px-12">
          <div className="text-center py-12">
            <h2 className="text-6xl w-fit mx-auto font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A3699E] to-[#7AA0E1]">
              Team
            </h2>
          </div>

          {/* Founders Subheading */}
<div className="text-center mb-8">
  <h3 className="text-3xl font-semibold text-gray-800">Founders</h3>
</div>

<div className="md:flex flex-wrap justify-center gap-6">
  {teamMembers.map((member, index) => (
    <div key={index} className="team-member justify-center items-center flex w-full md:w-[calc(20%-1rem)]">
      <div className="relative">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="object-cover rounded-lg"
        />
        <div className="overlay gap-2 w-full h-full absolute inset-0 flex items-center transition-opacity duration-300 ease-in-out">
          {member.socials.linkedin && (
            <Link
              href={member.socials.linkedin}
              className="p-3 w-fit h-fit rounded-full text-white bg-[#5BC7FF]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Link>
          )}
          {member.socials.email && (
            <Link
              href={member.socials.email}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 w-fit h-fit rounded-full text-white bg-[#5BC7FF]"
            >
              <MdEmail />
            </Link>
          )}
          {member.socials.instagram && (
            <Link
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 w-fit h-fit rounded-full text-white bg-[#5BC7FF]"
            >
              <FaInstagram />
            </Link>
          )}
          {member.socials.phone && (
            <Link
              href={member.socials.phone}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 w-fit h-fit rounded-full text-white bg-[#5BC7FF]"
            >
              <FaPhone />
            </Link>
          )}
        </div>
        <div className="absolute rounded-b-lg bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent bottom-0 left-0 w-full p-4">
          <p className="text-white text-lg w-full text-center font-medium">
            {member.name}
          </p>
          <p className="text-white text-sm w-full text-center font-bold">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
          {/* Organising Core Subheading */}
<div className="text-center mt-16 mb-8">
  <h3 className="text-3xl font-semibold text-gray-800">Organising Core</h3>
</div>

<div className="md:flex flex-wrap justify-center gap-6">
  {teamMembers1.map((member, index) => (
    <div key={index} className="team-member justify-center items-center flex w-full md:w-[calc(20%-1rem)]">
      <div className="relative">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="object-cover rounded-lg"
        />
        <div className="absolute rounded-b-lg bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent bottom-0 left-0 w-full p-4">
          <p className="text-white text-lg w-full text-center font-medium">
            {member.name}
          </p>
          <p className="text-white text-sm w-full text-center font-bold">
            {member.role}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </>
  );
}
