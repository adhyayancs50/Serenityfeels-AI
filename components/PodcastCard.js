// components/PodcastCard.js

import Link from "next/link";

const PodcastCard = ({ title, date, imageUrl, pageUrl, altText }) => {
    return (
      <div className=" rounded overflow-hidden shadow-lg m-4">
        <Link href={pageUrl}>
          <img
            className="w-full"
            src={imageUrl}
            alt={altText}
            width="580"
            height="580"

          />
        <div className="px-6 bg-white py-4">
          <div className="font-bold text-[1.5rem] mb-2">{title}</div>
          <p className="text-gray-700 text-base">{date}</p>
        </div>
        </Link>
      </div>
    );
  };
  
  export default PodcastCard;
  