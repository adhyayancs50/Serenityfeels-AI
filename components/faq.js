// import React from "react";

// export default function Faq() {
//   return (
//     <section id="faq" className="bg-gray-900 text-white">
//         <div className="py-8 px-4 max-w-screen-xl mx-auto">
//           <h2 className="mb-8 text-center text-[2.75rem] font-bold leading-tight pt-8 pb-8">
//             FAQs
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 pt-12">

//             {/* FAQ 1 */}
//             <div className="mb-10">
//               <h3 className="flex items-center mb-4 text-lg font-medium text-white">
//               <svg
//                       style={{ width: "20px", height: "20px" }}
//                       className="mr-2"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>{" "}
//                 Is the use of chatbots in psychiatry secure and confidential?
//               </h3>
//               <p className="text-gray-400">
//                 Yes, we prioritize security and confidentiality. Our chatbot platform complies with industry standards for data protection, and all communication between the chatbot and users is encrypted.
//               </p>
//             </div>

//             {/* FAQ 2 */}
//             <div className="mb-10">
//               <h3 className="flex items-center mb-4 text-lg font-medium text-white">
//               <svg
//                       style={{ width: "20px", height: "20px" }}
//                       fill="currentColor"
//                       className="mr-2"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>{" "}                Are the chatbot services available 24/7?
//               </h3>
//               <p className="text-gray-400">
//                 Yes, our chatbot services are accessible 24/7, providing convenient engagement for both psychiatrists and patients.
//               </p>
//             </div>

//             {/* FAQ 3 */}
//             <div className="mb-10">
//               <h3 className="flex items-center mb-4 text-lg font-medium text-white">
//               <svg
//                       style={{ width: "20px", height: "20px" }}
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       className="mr-2"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>{" "}                What languages does the chatbot support?
//               </h3>
//               <p className="text-gray-400">
//                 The chatbot currently operates in English. However, our psychiatrists are fluent in English, Hindi, Gujarati, and Marathi. We are actively exploring options to expand language support for a more inclusive experience.
//               </p>
//             </div>

//             {/* FAQ 4 */}
//             <div className="mb-10">
//               <h3 className="flex items-center mb-4 text-lg font-medium text-white">
//               <svg
//                       style={{ width: "20px", height: "20px" }}
//                       fill="currentColor"
//                       className="mr-2"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>{" "}                Are psychiatrists well qualified?
//               </h3>
//               <p className="text-gray-400">
//                 Our psychiatrists are highly educated and trained. They undergo extensive education and training, ensuring they are well-equipped to understand and address a wide range of mental health issues.
//               </p>
//             </div>

//             {/* FAQ 5 */}
//             <div className="mb-10">
//               <h3 className="flex items-center mb-4 text-lg font-medium text-white">
//               <svg
//                       style={{ width: "20px", height: "20px" }}
//                       fill="currentColor"
//                       className="mr-2"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>{" "}                Are the chatbot responses personalized for each user?
//               </h3>
//               <p className="text-gray-400">
//                 Yes, the chatbot is designed to provide personalized responses based on user interactions.
//               </p>
//             </div>

//             {/* Additional FAQ Entries */}

//           </div>
//         </div>
//     </section>
//   );
// }
import React, { useState } from "react";

const faqs = [
  {
    question: "Is the use of chatbots in psychiatry secure and confidential?",
    answer: "Yes, we prioritize security and confidentiality. Our chatbot platform complies with industry standards for data protection, and all communication between the chatbot and users is encrypted.",
  },
  {
    question: "Are the chatbot services available 24/7?",
    answer: "Yes, our chatbot services are accessible 24/7, providing convenient engagement for both psychiatrists and patients.",
  },
  {
    question: "What languages does the chatbot support?",
    answer: "The chatbot currently operates in English. However, our psychiatrists are fluent in English, Hindi, Gujarati, and Marathi. We are actively exploring options to expand language support for a more inclusive experience.",
  },
  {
    question: "Are psychiatrists well qualified?",
    answer: "Our psychiatrists are highly educated and trained. They undergo extensive education and training, ensuring they are well-equipped to understand and address a wide range of mental health issues.",
  },
  {
    question: "Are the chatbot responses personalized for each user?",
    answer: "Yes, the chatbot is designed to provide personalized responses based on user interactions.",
  },
  {
    question: "Is Serenity effective in addressing mental health issues?",
    answer: "Our business provides a comprehensive solution to mental health issues, combining AI-driven support with human connection. Our platform is user-friendly and helps you feel better each time you feel low, aiding in the fight against disorders with the help of certified psychiatrists.",
  },
  {
    question: "Can I communicate with psychiatrists in multiple languages?",
    answer: "Yes, our psychiatrists are proficient in a wide range of languages, including English, Hindi, Gujarati, Marathi, and foreign dialects such as French and Spanish.",
  },
  {
    question: "Can I book sessions with mental health professionals in person?",
    answer: "Currently, sessions can only be booked online. However, Serenity plans to expand into physical outlets and facilitate appointments at the professionals’ clinics in the future.",
  }
];


export default function FAQComponent() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl w-fit mx-auto font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A3699E] to-[#7AA0E1]">
            FAQs
          </h2>
          <p className="text-gray-600 mt-4">
          Find quick answers to common questions.
          </p>
        </div>
        <div className="bg-white shadow rounded-lg">
          <div className="text-lg">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-b last:border-b-0 ${
                  activeIndex === index ? "bg-gray-100" : ""
                }`}
              >
                <button
                  className="w-full text-left p-4 font-bold flex justify-between items-center transition duration-300 ease-in-out"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  {faq.question}
                  <span className="transition transform duration-300 ease-in-out">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`transition-max-height overflow-hidden ${
                    activeIndex === index ? "max-h-24" : "max-h-0"
                  }`}
                >
                  <p className="p-4 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
