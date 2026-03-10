import React, { useState } from "react";
import FadeIn from "./FadeInOnScroll";
import SignupForm from "./SignupForm";

import award1 from "./Img/award1.webp";
import award2 from "./Img/award2.webp";
import award3 from "./Img/award3.webp";
import award4 from "./Img/award4.webp";
import award5 from "./Img/award5.webp";
import award6 from "./Img/award6.webp";
import award7 from "./Img/award7.webp";
import award8 from "./Img/award8.webp";
import award9 from "./Img/award9.webp";
import award10 from "./Img/award10.webp";
import award11 from "./Img/award11.webp";
import award12 from "./Img/award12.webp";

const images = [
  award1,
  award2,
  award3,
  award4,
  award5,
  award6,
  award7,
  award8,
  award9,
  award10,
  award11,
  award12,
];

const AwardSlider = () => {
  const [showForm, setShowForm] = useState(false);

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="pt-20 text-center pb-[3em] bg-gray-100">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-950 to-[rgb(184,136,82)] bg-clip-text text-transparent">
        Some Of GTCFX Awards
      </h2>

      {/* Slider animation */}
      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-slide {
          animation: slide 12s linear infinite;
        }
      `}</style>

      {/* Image Slider */}
      <div className="relative overflow-hidden w-full">
        <FadeIn>
          <div className="flex animate-slide">
            {duplicatedImages.map((src, index) => (
              <div key={index} className="flex-none w-1/3 p-2 flex justify-center">
                <img
                  src={src}
                  alt={`Award ${index + 1}`}
                  className="w-[150px] h-auto rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center items-center mt-[4em]">
        <button
          onClick={() => setShowForm(true)}
          className="relative px-8 md:px-20 py-3 text-white rounded-full 
          bg-gradient-to-r from-blue-950 to-[rgb(184,136,82)] 
          overflow-hidden transition-transform duration-300 
          hover:scale-110 hover:rotate-1"
        >
          <span className="relative z-10 font-semibold">
            Sign Up For Smart Earner Bot Now
          </span>
          <span className="glow-slide"></span>
        </button>
      </div>

      {/* Signup Modal */}
      {showForm && <SignupForm onClose={() => setShowForm(false)} />}

    </div>
  );
};

export default AwardSlider;