
import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ items }) => {
  // Add an additional set of items at the end for looping
  const [prevornext, setprevornext] = useState()
  const extendedItems = [...items, ...items];
  const [totalVisibleItems, setTotalVisibleItems] = useState(3);

  const baseItemCount = items.length;
  const handleResize = () => {
    // Check the window width and adjust totalVisibleItems
    if (window.innerWidth < 640) { // Assuming 640px is the breakpoint for 'sm'
      setTotalVisibleItems(1);
    } else {
      setTotalVisibleItems(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => {
    setprevornext(0)
    setIsTransitioning(true);

    if (currentIndex < baseItemCount-totalVisibleItems) {
      // Move to the next item
      setCurrentIndex(currentIndex + 1);
    } else {
      // Reset to the first item without animation
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    // setIsTransitioning(true);
    setprevornext(1)
    if (currentIndex > 2) {
      // Move to the previous item
      setCurrentIndex(currentIndex - 1);
    } else {
      // Reset to the end without animation
      setIsTransitioning(false);
      setCurrentIndex(10);
    }
  };

  useEffect(() => {
    if (!isTransitioning && prevornext == 1) {
      // As soon as the transition is disabled, and the carousel has been reset,
      // we want to wait for the browser to render once and then enable the transition
      // again for smooth scrolling to the next item.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(9);
        });
      });
    }
    if (!isTransitioning && prevornext == 0) {
        // As soon as the transition is disabled, and the carousel has been reset,
        // we want to wait for the browser to render once and then enable the transition
        // again for smooth scrolling to the next item.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
            setCurrentIndex(1);
          });
        });
      }
  }, [isTransitioning]);

  // Automatically cycle through slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div id="testimonials" className="flex  flex-col items-center space-y-4">
      <div className="relative w-full">
        <div className="overflow-hidden">
          <div
            className={`flex transition-transform duration-300 ease-out ${!isTransitioning ? 'transition-none' : ''}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / totalVisibleItems)}%)`
            }}
          >
            {extendedItems.map((item, index) => (
             <div
             key={index}
             className={`flex-none w-full p-4 text-center ${index >= baseItemCount ? 'hidden' : ''}`}
             style={{
               width: `${100 / totalVisibleItems}%`,
               opacity: index === currentIndex+1 ? 1 : 0.5
             }}
           >
                <div className=" p-6 bg-clip-text text-transparent bg-white rounded-lg shadow-md w-full">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-white mx-auto mb-4">
                    {/* SVG path for quote mark */}
                    <path fill="currentColor" fillRule="evenodd" d="M4.49 7.529a5.3 5.3 0 011.174-.131c3.128 0 5.663 2.716 5.663 6.065 0 3.35-2.535 6.066-5.663 6.066S0 16.814 0 13.463c0-.098.002-.197.007-.295H0C0 8.113 3.84 4 8.56 4v2.036c-1.531 0-2.943.558-4.07 1.493zm12.674 0c.378-.086.77-.131 1.172-.131 3.128 0 5.664 2.716 5.664 6.065 0 3.35-2.536 6.066-5.664 6.066-3.128 0-5.663-2.715-5.663-6.066 0-.098.002-.197.007-.295h-.007c0-5.055 3.84-9.168 8.56-9.168v2.036c-1.532 0-2.943.558-4.07 1.493z" clipRule="evenodd"></path>
                  </svg>
                  <p className="text-lg font-semibold italic">"{item.text}"</p>
                  <footer className="mt-4">
                    <p className="font-medium">— {item.user}</p>
                  </footer>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md"
        >
          {/* Left Arrow */}
          <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md"
        >
          {/* Right Arrow */}
          <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
