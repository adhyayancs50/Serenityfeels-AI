import React from 'react'
import Link from 'next/link'
export default function LandingChatbot() {
  return (
    <div class="bg-[white] my-12 md:my-0 min-h-screen container text-black overflow-hidden mx-auto flex flex-col md:flex-row items-center">
        <div class="flex-1 px-12 flex flex-col items-start p-6">
          <h2 class="text-5xl font-bold mb-2">
          Introducing Our Chatbot, Empathia
          </h2>
          <p class="mb-4 text-lg">
          Our chatbot, Empathia, is crafted with love to support and nurture your mind and spirit. Receive personalized mindfulness recommendations, access soothing playlists, meditation videos, and guided yoga sessions—all tailored to promote relaxation and inner peace. Empathia is available 24/7, ensuring you can restore balance and serenity in your life.

</p>
          
<Link href="/dashboard?chat=ab736096-693e-465b-a0c5-92ca682a6ceb" class="bg-gradient-to-r from-[#A3699E] to-[#7AA0E1] px-8 text-white py-2 rounded-full transition duration-300 ease-in-out hover:bg-[#021221] hover:text-[#021221] hover:border-[#003128]">
  Try now
</Link>

        </div>
        <div className="flex-1 min-h-screen overflow-hidden flex justify-center items-center">
      <div className='min-h-screen w-full flex justify-center items-center'>
        {/* <video 
          src="./Chatbot.mp4"
          loading="lazy"
          alt="iPhone 14 Pro Space Black"
          className="object-contain w-auto h-[90vh]" // Adjust object-fit and full height
          srcSet="https://assets-global.website-files.com/643ee9be81a7a7f8da6260ea/643ee9bf81a7a7bbc4626114_iPhone%252014%2520Pro%2520%25E2%2580%2593%2520Space%2520Black-p-500.png 500w,
                  https://assets-global.website-files.com/643ee9be81a7a7f8da6260ea/643ee9bf81a7a7bbc4626114_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp 800w"
        /> */}
         <div>
        <video
          className="w-full h-[90vh]"
          src="./Chatbot.mp4" 
          autoPlay
            muted
            loop
          // Inline styles to disable interaction
          style={{ pointerEvents: "none" }}
        >
          Your browser does not support the video tag.
        </video>
        </div>

      </div>
    </div>
      </div>
  )
}
