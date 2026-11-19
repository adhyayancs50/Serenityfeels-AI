// // pages/index.js or a specific component file
// export default function Banner() {
//     return (
//       <div className="relative bg-blue-900 text-white">
        
//         {/* Parallax Background */}
//         <div
//           className="absolute inset-0 bg-cover bg-no-repeat"
//           style={{ backgroundImage: './banner.jpg', transform: 'translateY(25%)' }}
//         />
//         <img src="./banner.jpg" alt="" />
  
//         {/* Overlay if needed */}
//         <div className="absolute inset-0  opacity-50"></div>
  
//         {/* Content */}
//         <div className="relative container min-h-[40vh] my-auto flex justify-center items-center mx-auto px-4 py-20 text-center">
//           <h3 className="text-5xl font-bold">WE FEEL, WE HEAL</h3>
          
//         </div>
//       </div>
//     );
//   }
  // pages/index.js or a specific component file
export default function Banner() {
    return (
        <div className="relative bg-blue-900 overflow-hidden text-white min-h-[40vh] flex items-center justify-center">
        
            {/* Parallax Background */}
            <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{ backgroundImage: 'url("/banner.jpg")',  minHeight:' 500px',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'}}
            />

            {/* Overlay if needed */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="z-10">
                <h3 className="text-6xl text-center font-bold  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">We feel, We heal</h3>
            </div>
        </div>
    );
}
