// import { useEffect } from "react";

// const Missionvission = ({ data }) => {
//   const profilePic = "/logo.png"; // Assuming 'images/logo.png' is in the public folder

//   return (
//     <section id="about" className=" bg-[#000524] text-white  py-12 mx-auto">
//       <div className="flex justify-center max-w-screen-xl items-center mx-auto space-x-10">
//         <img
//           src={profilePic}
//           alt="Logo"
//           className="w-48 flex-none" // Adjust width as needed
//         />
//         <div className="flex space-x-4">
//           <div className="flex-1">
//             <div className=" h-[50%] ">
//               <div className="p-4 h-[95%] border border-gray-300 text-center rounded-lg">
//                 <h2 className="text-xl font-semibold">Vision</h2>
//                 <p className="text-[#CCCCCC] leading-loose text-[1rem]">
//                   Our vision is to help mental health be de-stigmatised, widely
//                   accessible to every single individual and help people live
//                   their most fulfilling lives.
//                 </p>
//               </div>
//             </div>
//             <div className="h-[50%] relative">
//               <div className="p-4 h-[95%] border absolute bottom-0 border-gray-300 text-center rounded-lg">
//                 <h2 className="text-xl font-semibold">Mission</h2>
//                 <p className="text-[#CCCCCC] leading-loose  text-[1rem]">
//                   Our mission is to provide a supportive platform which serves
//                   individuals of every background with mental health assistance
//                   nationally and globally in the future.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="w-[50%] inline-block align-top p-4 border border-gray-300 rounded-lg h-96 text-center">
//             <h2 className="text-xl font-semibold">About Us</h2>
//             <p className="text-[#CCCCCC] leading-loose  text-[1rem]">
//               At Serenity, our mission is to address the challenges associated
//               with mental health through a comprehensive approach that combines
//               AI-driven support with human interaction. Our chatbot facilitates
//               anonymous expression, offering personalized well-being activities
//               and connecting users with affordable, linguistically diverse
//               psychiatrists. In response to the growing demand, Serenity
//               utilizes technology to deliver accessible, affordable, and
//               community-centric mental health care, paving the way for a world
//               where serenity is within everyone's reach.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Missionvission;
import { useEffect } from "react";

const Missionvission = ({ data }) => {
  const profilePic = "/logofilled.jpeg"; // Adjust the path as needed

  return (
    <section id="about" className="bg-[#000524] text-white py-12 mx-auto">
      <div className="flex flex-col md:flex-row justify-center max-w-screen-xl items-center mx-auto space-y-4 md:space-y-0 md:space-x-10 rounded-full px-4">
        <img
          src={profilePic}
          alt="Logo"
          className="w-32 rounded-full md:w-48 flex-none" // Adjust width responsively
        />
        <div className="flex flex-col md:space-x-4 md:flex-row flex-1">
          <div className="flex-1 space-y-4 md:space-y-0 mb-4 md:mb-0 md:flex md:flex-col justify-between">

            <div className="p-4 border border-gray-300 h-[47.5%] text-center rounded-lg">
              <h2 className="text-xl font-semibold">Vision</h2>
              <p className="text-[#CCCCCC] text-justify leading-loose text-[1rem]">
              De-stigmatize mental health and make it widely accessible to every single individual. Help teens live their most fulfilling lives.

              </p>
            </div>
            <div className="p-4 h-[47.5%] border border-gray-300 text-center rounded-lg">
              <h2 className="text-xl font-semibold">Mission</h2>
              <p className="text-[#CCCCCC] text-justify leading-loose text-[1rem]">
              Provide a supportive platform which serves individuals of every background with mental health assistance; nationally and globally in the future.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[50%] p-4 border border-gray-300 rounded-lg text-center">
            <h2 className="text-xl font-semibold">About Us</h2>
            <p className="text-[#CCCCCC] text-justify leading-loose text-[1rem]">
            At Serenity, we combine AI-driven support and human interaction to address the challenges associated with mental health. Our platform includes a chatbot which facilitates anonymous expression, offering personalized responses and connecting users with diverse mental health professionals. We utilize technology to deliver accessible, affordable, and community-centric mental health care, paving the way for a world where serenity is within everyone's reach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Missionvission;
