import React, { useState } from "react";
import Link from "next/link";
import PodcastCard from "./PodcastCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

const Podcasts = () => {
  // Array of podcast data, you can fill in the rest or fetch it from an API
  const podcasts = [
    {
      id: 40,
      title: "Debunking Anxiety with Kavya",
      date: "April 14, 2024",
      imageUrl: "./km.png",
      link: "https://open.spotify.com/episode/4r063byXGHI6Syy6oGF18g?si=423b509e4e154617",
    },
    {
      id: 40,
      title: "Debunking Myths surrounding Psychology",
      date: "April 21, 2024",
      imageUrl: "./st.png",
      link: " https://open.spotify.com/episode/4eudszCI6tBmqP63jeQnKB?si=dd83defa7ea041cc",
    },
    {
      id: 40,
      title: "Debunking Stress with Malachi",
      date: "May 2, 2024",
      imageUrl: "./ms.png",
      link: "https://open.spotify.com/episode/4Kk3d5Oshan22dT91FdBLN",
    },
    {
      id: 40,
      title: "Debunking Myths with Karan Johar",
      date: "May 9, 2024",
      imageUrl: "./kj.png",
      link: "https://open.spotify.com/episode/6SW8Q30pRPMtoGRzj34e4e",
    },
    {
      id: 40,
      title: "Debunking Myths with Tom Holland",
      date: "May 26, 2024",
      imageUrl: "./th.png",
      link: "https://open.spotify.com/episode/6n8ANnzOOPhjt9VbLaD3KK",
    },

    // ... other podcast data
  ];

  // Array of article data, similar structure to podcasts
  const articles = [
    {
      id: 40,
      title: "Unveiling the Unseen",
      date: "August 13, 2021",
      imageUrl:
        "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc8064074-5be3-4f36-8ef2-533c89bcd5a0_800x418.webp",
      link: "https://infinitly.substack.com/p/unveiling-the-unseen-how-mental-well?r=382nt7&utm_campaign=post&utm_medium=web&triedRedirect=true",
    },
    {
      id: 40,
      title: "Unveiling the Unseen",
      date: "August 13, 2021",
      imageUrl:
        "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc8064074-5be3-4f36-8ef2-533c89bcd5a0_800x418.webp",
      link: "https://infinitly.substack.com/p/unveiling-the-unseen-how-mental-well?r=382nt7&utm_campaign=post&utm_medium=web&triedRedirect=true",
    },
    
  
  ];
  // State to manage the current category
  const [category, setCategory] = useState("podcasts");

  const getContentData = () => {
    return category === "podcasts" ? podcasts : articles;
  };
  const headerText = category === "podcasts" ? "Podcasts" : "Articles";

  return (
    <div className="container text-center mx-auto px-4 md:py-24 py-16">
      <h2 className="text-5xl font-bold text-black mb-3">Podcasts & Article</h2>
      <p className="text-xl text-gray-600 my-7">
        Tune in to our podcast featuring activists, survivors, and public
        figures as they share their journeys and insights, raising awareness
        about mental health, and debunking commonly held myths.
      </p>
      <div className="flex mx-auto w-fit my-4 gap-4">
        <button
          className={`px-6 py-2 text-gray-800 border-2 border-gray-800 rounded transition-all duration-300 ${
            category === "podcasts"
              ? "bg-black text-white"
              : "bg-transparent opacity-60 hover:opacity-80 hover:bg-black hover:text-white"
          }`}
          onClick={() => setCategory("podcasts")}
        >
          Podcasts
        </button>

        <button
          className={`px-6 py-2 text-gray-800 border-2 border-gray-800 rounded transition-all duration-300 ${
            category === "articles"
              ? "bg-black text-white "
              : "bg-transparent opacity-60 hover:opacity-80 hover:bg-black hover:text-white"
          }`}
          onClick={() => setCategory("articles")}
        >
          Articles
        </button>
      </div>
      <div
        className="min-h-[80vh] h-fit md:flex justify-start"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(162,105,159, 1), rgba(124,158,223, 0.4)), url('./podcastbackground.jpg')`,
          backgroundSize: "cover", // Ensures that the background covers the div completely
          backgroundPosition: "center", // Centers the background image in the div
        }}
      >
        <div className="md:w-1/3 my-auto">
          <h4 className={`text-6xl font-normal w-full text-center my-4`}>
            {category === "podcasts" ? "Listen" : "Read Our"} <br />{" "}
            <span className="font-bold">{headerText}</span> {category === "podcasts" ? "on" : ""}
          </h4>
          <div className="flex flex-col  items-center space-y-3">
            {category === "podcasts" ? (
              <>
                <Link
                  href="https://open.spotify.com/show/6AWR7KmhQ5cHFhDGEObzVw?si=a00f2059a0b746ea"
                  target="_blank"
                  className="rounded-[1rem] overflow-hidden"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-64"
                    src="https://images.squarespace-cdn.com/content/v1/5f25cd4985013c3c29747182/1625897763863-QSCKAYINFJHJWRGOIPWH/listen-on-spotify.png"
                    alt="Listen on Spotify"
                  />
                </Link>
                <Link
                  href="https://youtube.com/@serenity_feels?si=wwOEEKXI8mteRIpm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-64 rounded-[1rem]"
                    src="https://images.squarespace-cdn.com/content/v1/5f25cd4985013c3c29747182/1625897777588-5W7QDQDQG4X10RONFKCB/listen-on-youtube.png"
                    alt="Listen on Apple Podcasts"
                  />
                </Link>
                <Link
                  href="https://music.amazon.com/podcasts/8a2b9d59-47a7-4ef4-8dae-9ac56103b298/debunking-myths"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-64 h-16 rounded-[1rem]"
                    src="./amazonmusic.png"
                    alt="Listen on Google Podcasts"
                  />
                </Link>
              </>
            ) : (
              <>
                {/* <Link
                  href="https://podcasts.apple.com/in/podcast/calm-sage/id1496349893"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-64 rounded-[1rem]"
                    src="https://www.calmsage.com/wp-content/uploads/2020/02/apple-podcasts-button.jpg"
                    alt="Listen on Apple Podcasts"
                  />
                </Link>
                <Link
                  href="https://podcasts.google.com/?feed=aHR0cHM6Ly93d3cuY2FsbXNhZ2UuY29tL2ZlZWQvcG9kY2FzdC8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-64"
                    src="https://www.calmsage.com/wp-content/uploads/2020/02/listen-on-google-podcast.png"
                    alt="Listen on Google Podcasts"
                  />
                </Link> */}
              </>
            )}
          </div>
        </div>
        <div className="md:w-2/3 overflow-visible">
          <div className=" h-full justify-center items-center flex">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              loop
              breakpoints={{
                // when window width is >= 640px
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {getContentData().map((item) => (
                <SwiperSlide key={item.id}>
                  <PodcastCard
                    title={item.title}
                    date={item.date}
                    imageUrl={item.imageUrl}
                    pageUrl={item.link}
                    altText={item.title}
                  />
                </SwiperSlide>
              ))}
              <button className="swiper-button-prev-custom">
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="swiper-button-next-custom">
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
