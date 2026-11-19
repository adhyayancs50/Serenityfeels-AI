import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Collaberations() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      name: "Mrs. Deepika Padukone",
      role: "Actor",
      image: "./1.png", // Replace with your image path
      description:
          `Mrs. Deepika Padukone, one of Bollywood's most esteemed actors and the founder of "The Live Love Laugh Foundation," an NGO dedicated to raising awareness about mental health. We were honored to host her as a guest on our podcast, where she shared her journey of discovering, recovering, and being vocal about her illness, despite the judgment that comes with her stardom.
          `,
    },

    // Adding new collaborations
    {
      name: "NIMHANS",
      role: "Research Partner",
      image: "./2.png", // Replace with your image path
      description:
        "Serenity has successfully tested its prototype at the National Institute of Mental Health and Neurosciences (NIMHANS), ensuring it meets Indian telehealth regulations and efficacy standards for teenagers.",
    },
    {
      name: "Mr. Malachi Sunguro",
      role: "Advocate and Blogger",
      image: "./4.png", // Replace with your image path
      description:
        "Malachi Sunguro, a respected mental health advocate, featured Serenity in his blog, enhancing our brand among his large readership of teenagers and discussing the critical impact of academic stress on mental well-being.",
    },
    // {
    //   name: "CortisolX",
    //   role: "Technology Partner",
    //   image: "./3.png", // Replace with your image path
    //   description:
    //     "In collaboration with CortisolX, Serenity integrates real-time cortisol monitoring to offer targeted stress management solutions, fostering better mental health among teenagers.",
    // }
  ];
  
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white">
        <div className="absolute -z-10 bg-gradient-to-r from-[#272F9F] to-[#B12A82] w-full h-[60vh]"></div>
        <div className="p-4 sm:p-8 md:p-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-12 md:my-24 px-6 md:px-24">
            Collaborations
          </h1>
          <div className="flex flex-wrap px-6 md:px-24 -mx-2 md:-mx-4">
            {services.map((member, index) => (
              <div
                key={index}
                className="cursor-pointer w-full md:w-1/2 lg:w-1/4 px-2 md:px-4 mb-4 md:mb-8"
                onClick={() => handleServiceClick(member)}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto"
                  />
                  <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent bottom-0 left-0 w-full p-4 md:p-6">
                    <p className="text-sm sm:text-base font-medium">
                      {member.name}
                    </p>
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedService && (
          <div
            className="fixed inset-0 z-10 flex items-center justify-center"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"></div>
            <div className="relative z-10 w-full max-w-[55rem]  overflow-y-auto">
              <div className="flex flex-col items-center  justify-center p-4">
                <div
                  className="relative w-full md:p-24 p-12 overflow-hidden  bg-white rounded-lg shadow-xl"
                  style={{
                    backgroundImage: "url('./popupbg.jpeg')",
                    backgroundSize: "cover", // This will ensure the image covers the entire modal box without being stretched
                    backgroundPosition: "center", // This centers the image in the div
                    backgroundRepeat: "no-repeat", // Prevents the image from repeating
                  }}
                >
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 text-white bg-red-500 rounded-full focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="md:flex  gap-20">
                    <div className="md:w-1/2 w-full my-auto">
                      <div className="h-full max-w-60 max-h-60 mx-auto flex items-center justify-center overflow-hidden rounded-full">
                        <img src="./logofilled.jpeg" className="" alt="" />
                      </div>
                    </div>
                    <div className="md:w-1/2 w-full text-black h-full">
                      <h2 className="   text-center font-bold text-[1.1rem]">
                        {selectedService.name}
                      </h2>
                      <br />
                      <div className="text-[1rem] text-justify text-gray-500">
                        <p className="mb-4">{selectedService.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <div className="min-h-screen text-white">
    <div className="absolute -z-10 bg-gradient-to-r from-[#272F9F] to-[#B12A82] w-full h-[60vh]"></div>
    <div className="p-4 sm:p-8 md:p-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-12 md:my-24 px-6 md:px-24">Collaborations</h1>
        <div className="flex flex-wrap px-6 md:px-24 -mx-2 md:-mx-4">
        {services.map((member, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-2 md:px-4 mb-4 md:mb-8">
                <div className="relative">
                    <img src={member.image} alt={member.name} className="w-full h-auto" />
                    <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent bottom-0 left-0 w-full p-4 md:p-6">
                        <p className="text-sm sm:text-base font-medium">
                            {member.name}
                        </p>
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold">
                            {member.role}
                        </p>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </div>
</div> */}

      <Footer />
    </>
  );
}
