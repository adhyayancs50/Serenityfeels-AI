// // ContactComponent.jsx
// export default function Contact() {
//     return (
// <section className="text-gray-600 body-font relative">
//   <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
//     <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
//       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.429548861204!2d75.66374237525656!3d26.82628676379978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4a62be59c98d%3A0xc441de6a83c1f969!2sJayshree%20Periwal%20International%20School!5e0!3m2!1sen!2sin!4v1713777306573!5m2!1sen!2sin" width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//       <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
//         <div className="lg:w-1/2 px-6">
//           <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
//           <p className="mt-1">Mahapura Rd, Narayan-Y-Block, सेज, Mahapura, Bhankrota, Rajasthan 302026</p>
//         </div>
//         <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
//           <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
//           <a className="text-indigo-500 leading-relaxed">example@email.com</a>
//           <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
//           <p className="leading-relaxed">123-456-7890</p>
//         </div>
//       </div>
//     </div>
//     <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
//     <h2 className="text-3xl mb-2 w-fit font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A3699E] to-[#7AA0E1]">
//             FEEL FREE TO CONTACT US
//           </h2>      <p className="leading-relaxed mb-5 text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, voluptate!</p>
//       <div className="relative mb-4">
//         <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
//         <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//       </div>
//       <div className="relative mb-4">
//         <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
//         <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
//       </div>
//       <div className="relative mb-4">
//         <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
//         <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
//       </div>
//       <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
//       <p className="text-xs text-gray-500 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, maxime?</p>
//     </div>
//   </div>
// </section>
//     );
//   }
export default function Contact() {
  return (
      <section className="text-gray-200 body-font relative bg-gray-900">
          <div className="container px-5 py-20 mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.429548861204!2d75.66374237525656!3d26.82628676379978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4a62be59c98d%3A0xc441de6a83c1f969!2sJayshree%20Periwal%20International%20School!5e0!3m2!1sen!2sin!4v1713777306573!5m2!1sen!2sin" width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                      <div className="lg:w-1/2 px-6">
                          <h2 className="title-font font-semibold text-gray-300 tracking-widest text-xs">ADDRESS</h2>
                          <p className="mt-1">Mahapura Rd, Narayan-Y-Block, सेज, Mahapura, Bhankrota, Rajasthan 302026</p>
                      </div>
                      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                          <h2 className="title-font font-semibold text-gray-300 tracking-widest text-xs">EMAIL</h2>
                          <a className="text-indigo-400 leading-relaxed">info@serenityfeels.co.in</a>
                          <h2 className="title-font font-semibold text-gray-300 tracking-widest text-xs mt-4">PHONE</h2>
                          <p className="leading-relaxed">+91 701-459-3369</p>
                      </div>
                  </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 bg-gray-900 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                  <h2 className="text-3xl mb-2 w-fit font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A3699E] to-[#7AA0E1]">
                      FEEL FREE TO CONTACT US
                  </h2>
                  <p className="leading-relaxed mb-5 text-gray-500">Feel free to reach out to us by phone or message, and we'll do our best to respond to all inquiries promptly.</p>
                  <div className="relative mb-4">
                      <label for="name" className="leading-7 text-sm text-gray-500">Name</label>
                      <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                  <div className="relative mb-4">
                      <label for="email" className="leading-7 text-sm text-gray-500">Email</label>
                      <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                  <div className="relative mb-4">
                      <label for="message" className="leading-7 text-sm text-gray-500">Message</label>
                      <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-200 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                  </div>
                  <button className="text-white bg-gradient-to-r from-[#A3699E] to-[#7AA0E1] border-0 py-2 px-6 focus:outline-none hover:opacity-80 rounded text-lg">Send</button>
                  <p className="text-xs  text-center text-gray-500 mt-3">You can anticipate a response within 24-48 hours on business days after sending your message.</p>
              </div>
          </div>
      </section>
  );
}
