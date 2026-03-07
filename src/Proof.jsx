import React, { useState, useEffect, useRef } from 'react';
import proof1 from "./Img/proof1.png";
import proof2 from "./Img/proof2.png";
import proof3 from "./Img/proof3.png";
import proof4 from "./Img/proof4.png";
import proof5 from "./Img/proof5.png";

// Define the images array with imported images
const IMAGES = [
  { src: proof1, alt: "Proof of concept 1" },
  { src: proof2, alt: "Proof of concept 2" },
  { src: proof3, alt: "Proof of concept 3" },
  { src: proof4, alt: "Proof of concept 4" },
  { src: proof5, alt: "Proof of concept 5" },
];

const TOTAL_SLIDES = IMAGES.length;
// Duplicate the slides for seamless loop effect
const ALL_SLIDES = [...IMAGES, ...IMAGES];

// Define the slide duration and interval
const SLIDE_DURATION = 500; // ms for manual scroll
const AUTO_INTERVAL = 3000; // ms for auto slide

// Custom hook for responsive slides
const useResponsiveSlides = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) { // lg: breakpoint
        setSlidesPerView(3);
      } else if (width >= 640) { // sm: breakpoint
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  return slidesPerView;
};

// Main Proof Component
const Proof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const slidesPerView = useResponsiveSlides();

  // Function to scroll to a specific index smoothly
  const scrollToSlide = (index) => {
    if (!sliderRef.current) return;

    const containerWidth = sliderRef.current.clientWidth;
    const slideWidth = containerWidth / slidesPerView;

    sliderRef.current.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  // Handler for the next button
  const nextSlide = () => {
    if (currentIndex < ALL_SLIDES.length) {
      scrollToSlide(currentIndex + 1);
    }
  };

  // Handler for the previous button
  const prevSlide = () => {
    if (currentIndex > 0) {
      scrollToSlide(currentIndex - 1);
    }
  };

  // Auto-Slide and Infinite Loop logic
  useEffect(() => {
    let autoSlideTimer;

    const startAutoSlide = () => {
      autoSlideTimer = setInterval(() => {
        nextSlide();
      }, AUTO_INTERVAL);
    };

    startAutoSlide();

    if (currentIndex >= TOTAL_SLIDES) {
      clearInterval(autoSlideTimer);

      setTimeout(() => {
        if (!sliderRef.current) return;

        const containerWidth = sliderRef.current.clientWidth;
        const slideWidth = containerWidth / slidesPerView;

        sliderRef.current.scrollTo({
          left: 0,
          behavior: 'auto',
        });
        setCurrentIndex(0);
        startAutoSlide();
      }, SLIDE_DURATION);
    }

    return () => clearInterval(autoSlideTimer);
  }, [currentIndex, slidesPerView]);

  // Tailwind classes for dynamic slide width
  const slideWidthClasses = {
    1: "w-full",
    2: "w-1/2",
    3: "w-1/3",
  }[slidesPerView];

  return (
    <div className="p-2 pt-[3em] bg-gray-100 min-h-screen font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4 text-center">
          Proof From Some Of Our Running Accounts
        </h1>
      
        {/* SLIDER CONTAINER */}
        <div className="relative group">
          {/* SLIDER TRACK */}
          <div
            ref={sliderRef}
            className="flex overflow-x-scroll snap-x snap-mandatory hide-scrollbar rounded-lg shadow-lg bg-white transition-shadow duration-300 ease-in-out hover:shadow-xl"
            style={{ scrollBehavior: 'smooth' }}
          >
            {ALL_SLIDES.map((image, index) => (
              <div
                key={index}
                className={`flex-shrink-0 snap-center ${slideWidthClasses} h-auto p-1`}
              >
                <div className="w-full aspect-w-4 aspect-h-3 rounded-md overflow-hidden border border-gray-100 transition-transform duration-500 ease-out hover:scale-[1.02]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/800x600/ef4444/ffffff?text=Image+Load+Error";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-white/70 rounded-full shadow-md text-gray-800 hover:bg-white transition duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed hidden md:block"
            aria-label="Previous Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= ALL_SLIDES.length}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-white/70 rounded-full shadow-md text-gray-800 hover:bg-white transition duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed hidden md:block"
            aria-label="Next Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center mt-4 space-x-1">
            {IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  (currentIndex % TOTAL_SLIDES) === index
                    ? 'bg-gray-800 w-4'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hidden custom styles for scrollbar hiding */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
  );
};

export default Proof;