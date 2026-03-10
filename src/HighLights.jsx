import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FadeInOnScroll from "./FadeInOnScroll";
import SignupForm from "./SignupForm";

import webinar1 from "./Img/webinar-1.jpeg";
import webinar2 from "./Img/webinar-2.jpeg";
import webinar3 from "./Img/webinar-3.jpeg";
import webinar4 from "./Img/webinar-4.jpeg";
import webinar5 from "./Img/webinar-5.jpeg";
import webinar6 from "./Img/webinar-6.jpeg";

function HighLights() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const images = [
    webinar1,
    webinar2,
    webinar3,
    webinar4,
    webinar5,
    webinar6
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);

    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <section id="highlights" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Heading */}
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-10 bg-gradient-to-r from-blue-950 to-[rgb(184,136,82)] bg-clip-text text-transparent">
            Highlights From Our Previous Seminars
          </h2>
        </FadeInOnScroll>

        {/* Image Grid */}
        <FadeInOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

            {images.map((img, idx) => (
              <div
                key={idx}
                className="relative group w-full rounded-xl overflow-hidden shadow-md cursor-pointer"
                onClick={() => openModal(img)}
              >

                <img
                  src={img}
                  alt={`Webinar Highlight ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-[260px] md:h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    Highlight {idx + 1}
                  </span>
                </div>

              </div>
            ))}

          </div>
        </FadeInOnScroll>

        {/* Register Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowForm(true)}
            className="relative px-8 md:px-20 py-3 font-semibold text-white rounded-full 
            bg-gradient-to-r from-blue-950 to-[rgb(184,136,82)]
            overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10">Register Now</span>
            <span className="glow-slide"></span>
          </button>
        </div>

        {showForm && <SignupForm onClose={() => setShowForm(false)} />}

      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
          onClick={closeModal}
        >

          <motion.div
            className="relative max-w-5xl w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedImage}
              alt="Selected Webinar Highlight"
              className="w-full max-h-[85vh] object-contain rounded-2xl shadow-xl"
            />

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-100 transition"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

          </motion.div>
        </div>
      )}
    </section>
  );
}

export default HighLights;