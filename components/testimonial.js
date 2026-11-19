// import { FaQuoteLeft } from "react-icons/fa";

// const testimonials = [
//   {
//     user: "Dr. Shiv Gautam",
//     text: "Serenity's Chatbot provides continuous support with personalized mindfulness recommendations."
//   },
//   {
//     user: "Dr. Anil Tambi",
//     text: "Serenity acts as a constant support system and a receptive friend, revolutionising the field of psychiatry."
//   },
//   {
//     user: "Dr. Parul Pareek",
//     text: "The platform truly is user-friendly and streamlines the process of connecting with patients."
//   },
//   {
//     user: "Shirin Verma, Student (Grade 11)",
//     text: "The monthly events organised by Serenity are very informative and inspiring, evolving my perspective on mental health."
//   },
//   {
//     user: "Pavi Jain, Student (Grade 11)",
//     text: "Serenity's art therapy workshop at Café Bae helped me channel my emotions better, and I felt lighter after attending it."
//   },
//   {
//     user: "Harshil Garg, Student (Grade 11)",
//     text: "Serenity's prototype chatbot is like a comforting friend I turn to when feeling low. Highly recommend it to everyone!"
//   },
//   {
//     user: "Dr. Lekha Panicker",
//     text: "I have reached multiple patients over the past month, and I commend Serenity for connecting me to those in need."
//   },
//   // Add other testimonials as needed
// ];

// function Testimonials() {
//   return (
//     <div className="bg-gray-900 text-white py-10">
//       <div className="max-w-6xl mx-auto px-5">
//         <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
//               <FaQuoteLeft className="text-orange-500 text-3xl" />
//               <p className="mt-4">{testimonial.text}</p>
//               <h3 className="mt-6 font-semibold">{testimonial.user}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Testimonials;




// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import { FaQuoteLeft } from "react-icons/fa";
// import SwiperCore, { Pagination, Navigation } from 'swiper';

// // install Swiper modules
// // SwiperCore.use([Pagination, Navigation]);

// const testimonials = [
//   {
//     user: "Dr. Shiv Gautam",
//     text: "Serenity's Chatbot provides continuous support with personalized mindfulness recommendations."
//   },
//   {
//     user: "Dr. Anil Tambi",
//     text: "Serenity acts as a constant support system and a receptive friend, revolutionising the field of psychiatry."
//   },
//   {
//     user: "Dr. Parul Pareek",
//     text: "The platform truly is user-friendly and streamlines the process of connecting with patients."
//   },
//   {
//     user: "Shirin Verma, Student (Grade 11)",
//     text: "The monthly events organised by Serenity are very informative and inspiring, evolving my perspective on mental health."
//   },
//   {
//     user: "Pavi Jain, Student (Grade 11)",
//     text: "Serenity's art therapy workshop at Café Bae helped me channel my emotions better, and I felt lighter after attending it."
//   },
//   {
//     user: "Harshil Garg, Student (Grade 11)",
//     text: "Serenity's prototype chatbot is like a comforting friend I turn to when feeling low. Highly recommend it to everyone!"
//   },
//   {
//     user: "Dr. Lekha Panicker",
//     text: "I have reached multiple patients over the past month, and I commend Serenity for connecting me to those in need."
//   },
//   // Add other testimonials as needed
// ];

// function Testimonials() {
//   return (
    
//     // <div className="bg-gray-900 text-white py-10">
//     //   <div className="max-w-6xl mx-auto px-5">
//     //     <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
//     //     <Swiper
//     //       slidesPerView={3}
//     //       spaceBetween={30}
//     //       pagination={{
//     //         clickable: true,
//     //       }}
//     //       navigation={true}
//     //       className="mySwiper"
//     //     >
//     //       {testimonials.map((testimonial, index) => (
//     //         <SwiperSlide key={index}>
//     //           <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
//     //             <FaQuoteLeft className="text-orange-500 text-3xl" />
//     //             <p className="mt-4">{testimonial.text}</p>
//     //             <h3 className="mt-6 font-semibold">{testimonial.user}</h3>
//     //           </div>
//     //         </SwiperSlide>
//     //       ))}
//     //     </Swiper>
//     //   </div>
//     // </div>
//   );
// }

// export default Testimonials;


// Import Swiper React components

// import React, { Component } from "react";
// import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

// class Testimonials extends Component {
//   state = {
//     currentPage: 0,
//     testimonials: [
//       {
//         user: "Dr. Shiv Gautam",
//         text: "Serenity's Chatbot provides continuous support with personalized mindfulness recommendations."
//       },
//       {
//         user: "Dr. Anil Tambi",
//         text: "Serenity acts as a constant support system and a receptive friend, revolutionising the field of psychiatry."
//       },
//       {
//         user: "Dr. Parul Pareek",
//         text: "The platform truly is user-friendly and streamlines the process of connecting with patients."
//       },
//       {
//         user: "Shirin Verma, Student (Grade 11)",
//         text: "The monthly events organised by Serenity are very informative and inspiring, evolving my perspective on mental health."
//       },
//       {
//         user: "Pavi Jain, Student (Grade 11)",
//         text: "Serenity's art therapy workshop at Café Bae helped me channel my emotions better, and I felt lighter after attending it."
//       },
//       {
//         user: "Harshil Garg, Student (Grade 11)",
//         text: "Serenity's prototype chatbot is like a comforting friend I turn to when feeling low. Highly recommend it to everyone!"
//       },
//       {
//         user: "Dr. Lekha Panicker",
//         text: "I have reached multiple patients over the past month, and I commend Serenity for connecting me to those in need."
//       },
//       {
//         user: "Dhruv Sarda, Student (Grade )",
//         text: "I have been an active user on Serenity as it recommends soothing activities that lighten my mood when I'm sad."
//       },
//       {
//         user: "Dr. ID Gupta",
//         text: "I am proud to endorse Serenity as it blends artificial intelligence with psychiatry to help those in need."
//       },
//       {
//         user: "Dr. Aarti Midha",
//         text: "Kudos to Serenity for taking an initiative to reduce stigmas surrounding mental health in India."
//       },
//       {
//         user: "Frayasthi Arora, Student (Grade 9)",
//         text: "Serenity consistently provides calming playlists that help me relax when I'm feeling anxious or stressed."
//       },
//       {
//         user: "Tanvi Garg, College 2nd year",
//         text: "Serenity recommends uplifting activities that help ease my sadness—a valuable resource for me."
//       }
//     ]
//   };

//   testimonialsPerPage = 4;

//   goToNext = () => {
//     this.setState((prevState) => ({
//       currentPage: prevState.currentPage + 1,
//     }));
//   };

//   goToPrev = () => {
//     this.setState((prevState) => ({
//       currentPage: Math.max(prevState.currentPage - 1, 0),
//     }));
//   };

//   render() {
//     const { currentPage, testimonials } = this.state;
//     const totalPages = Math.ceil(testimonials.length / this.testimonialsPerPage);

//     return (
//       <>
//         <section
//           id="testimonials"
//           className="bg-black bg-opacity-80 py-10 relative"
//         >
//           <button
//             onClick={this.goToPrev}
//             disabled={currentPage === 0}
//             className={`absolute top-1/2 -translate-y-1/2 left-8 z-20 p-1 rounded-full 
//               ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'} transition-opacity`}
//           >
//             <FaCircleChevronLeft size="4rem" />
//           </button>

//           <div className="w-11/12 mx-auto flex gap-2.5 overflow-visible transform transition-transform duration-500"
//                style={{ transform: `translateX(-${currentPage * 100}%)` }}>
//             {testimonials.slice(currentPage * this.testimonialsPerPage, (currentPage + 1) * this.testimonialsPerPage).map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg p-5 shadow-md mb-5 text-center opacity-100 flex flex-col items-center min-w-[31.5rem] max-w-[31.5rem] transition-transform ease-in-out duration-500"
//               >
//                 <svg
//                   width="5rem"
//                   height="5rem"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   className="text-orange-500"
//                 >
//                   {/* SVG Path */}
//                 </svg>
//                 <h2 className="mt-2.5 mb-2.5">{testimonial.user}</h2>
//                 <p className="text-sm">{testimonial.text}</p>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={this.goToNext}
//             disabled={currentPage === totalPages - 1}
//             className={`absolute top-1/2 -translate-y-1/2 right-8 z-20 p-1 rounded-full 
//               ${currentPage === totalPages - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'} transition-opacity`}
//           >
//             <FaCircleChevronRight size="4rem" />
//           </button>
//         </section>
//       </>
//     );
//   }
// }

// export default Testimonials;


// Import useState for component state management and useEffect for side effects.



// import { useState, useEffect } from 'react';

// const Carousel = () => {
//   // State to keep track of the current index
//   const [currentIndex, setCurrentIndex] = useState(0);
//     const items = [
//         {
//           "user": "Dr. Shiv Gautam",
//           "text": "Serenity's Chatbot provides continuous support with personalized mindfulness recommendations."
//         },
//         {
//           "user": "Dr. Anil Tambi",
//           "text": "Serenity acts as a constant support system and a receptive friend, revolutionising the field of psychiatry."
//         },
//         {
//           "user": "Dr. Parul Pareek",
//           "text": "The platform truly is user-friendly and streamlines the process of connecting with patients."
//         },
//         {
//           "user": "Shirin Verma, Student (Grade 11)",
//           "text": "The monthly events organised by Serenity are very informative and inspiring, evolving my perspective on mental health."
//         },
//         {
//           "user": "Pavi Jain, Student (Grade 11)",
//           "text": "Serenity's art therapy workshop at Café Bae helped me channel my emotions better, and I felt lighter after attending it."
//         },
//         {
//           "user": "Harshil Garg, Student (Grade 11)",
//           "text": "Serenity's prototype chatbot is like a comforting friend I turn to when feeling low. Highly recommend it to everyone!"
//         },
//         {
//           "user": "Dr. Lekha Panicker",
//           "text": "I have reached multiple patients over the past month, and I commend Serenity for connecting me to those in need."
//         },
//         {
//           "user": "Dhruv Sarda, Student (Grade )",
//           "text": "I have been an active user on Serenity as it recommends soothing activities that lighten my mood when I'm sad."
//         },
//         {
//           "user": "Dr. ID Gupta",
//           "text": "I am proud to endorse Serenity as it blends artificial intelligence with psychiatry to help those in need."
//         },
//         {
//           "user": "Dr. Aarti Midha",
//           "text": "Kudos to Serenity for taking an initiative to reduce stigmas surrounding mental health in India."
//         },
//         {
//           "user": "Frayasthi Arora, Student (Grade 9)",
//           "text": "Serenity consistently provides calming playlists that help me relax when I'm feeling anxious or stressed."
//         },
//         {
//           "user": "Tanvi Garg, College 2nd year",
//           "text": "Serenity recommends uplifting activities that help ease my sadness—a valuable resource for me."
//         }
//       ]
//   // Function to go to the next slide
//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
//   };

//   // Function to go to the previous slide
//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
//   };

//   // Optional: Auto-rotate slides every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col items-center space-y-4">
//       <div className="relative w-full max-w-screen-lg">
//         {/* Container for the carousel items */}
//         <div className="overflow-hidden rounded-lg">
//           <div
//             className="flex transition-transform duration-300 ease-out"
//             style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//           >
//             {items.map((item, index) => (
//               <div key={index} className="flex-none w-full">
//                 {/* Replace with your content */}
//                 <img src={item.image} alt="" className="w-full object-cover" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Buttons */}
//         <button
//           aria-label="Previous"
//           onClick={prevSlide}
//           className="absolute top-1/2 left-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-lg"
//         >
//           {/* Replace SVG with preferred icon */}
//           <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24">
//             <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//         <button
//           aria-label="Next"
//           onClick={nextSlide}
//           className="absolute top-1/2 right-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-lg"
//         >
//           {/* Replace SVG with preferred icon */}
//           <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24">
//             <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
// In your Next.js page or parent component

import Carousel from './Carousel'; // Adjust the import path according to your file structure

const MyPage = () => {
    const items = [
        {
            "user": "Frayasthi Arora, Student (Grade 9)",
            "text": "Serenity consistently provides calming playlists that help me relax when I'm feeling anxious or stressed."
          },
          {
            "user": "Tanvi Garg, (College 2nd year)",
            "text": "Serenity recommends uplifting activities that help ease my sadness—a valuable resource for me."
          },
        {
          "user": "Dr. Shiv Gautam",
          "text": "Serenity's Chatbot provides continuous support with personalized mindfulness recommendations."
        },
        {
          "user": "Dr. Anil Tambi",
          "text": "Serenity acts as a constant support system and a receptive friend, revolutionising the field of psychiatry."
        },
        {
          "user": "Dr. Parul Pareek",
          "text": "The platform truly is user-friendly and streamlines the process of connecting with patients."
        },
        {
          "user": "Shirin Verma, Student (Grade 11)",
          "text": "The monthly events organised by Serenity are very informative and inspiring, evolving my perspective on mental health."
        },
        {
          "user": "Pavi Jain, Student (Grade 12)",
          "text": "Serenity's art therapy workshop at Café Bae helped me channel my emotions better, and I felt lighter after attending it."
        },
        {
          "user": "Harshil Garg, Student (Grade 10)",
          "text": "Serenity's prototype chatbot is like a comforting friend I turn to when feeling low. Highly recommend it to everyone!"
        },
        {
          "user": "Dr. Lekha Panicker",
          "text": "I have reached multiple patients over the past month, and I commend Serenity for connecting me to those in need."
        },
        {
          "user": "Dhruv Sarda, Student (Grade 9)",
          "text": "I have been an active user on Serenity as it recommends soothing activities that lighten my mood when I'm sad."
        },
        {
          "user": "Dr. ID Gupta",
          "text": "I am proud to endorse Serenity as it blends artificial intelligence with psychiatry to help those in need."
        },
        {
          "user": "Dr. Aarti Midha",
          "text": "Kudos to Serenity for taking an initiative to reduce stigmas surrounding mental health in India."
        },
        {
          "user": "Frayasthi Arora, Student (Grade 9)",
          "text": "Serenity consistently provides calming playlists that help me relax when I'm feeling anxious or stressed."
        },
        {
          "user": "Tanvi Garg, College 2nd year",
          "text": "Serenity recommends uplifting activities that help ease my sadness—a valuable resource for me."
        },
        {
            "user": "Dr. Shiv Gautam",
            "text": "Serenity's Chatbot provides continuous support with personalized mindfulness recommendations."
          },
          {
            "user": "Dr. Anil Tambi",
            "text": "Serenity acts as a constant support system and a receptive friend, revolutionising the field of psychiatry."
          },
      ]

  return (
    <div className="p-4 bg-[#111827]">
      <Carousel items={items} />
    </div>
  );
};

export default MyPage;
