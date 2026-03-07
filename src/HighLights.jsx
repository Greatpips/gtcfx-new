import React, { useState } from "react";
import { motion } from "framer-motion";
import FadeInOnScroll from "./FadeInOnScroll";
import video1 from "./Videos/video1.MP4";
import video2 from "./Videos/video2.mp4";
import video3 from "./Videos/video3.mp4";
import video4 from "./Videos/video4.mp4";
import webinar1 from "./Img/webinar1.JPG";
import webinar2 from "./Img/webinar2.JPG";
import webinar3 from "./Img/webinar3.JPG";
import webinar4 from "./Img/webinar4.jpeg";
import webinar5 from "./Img/webinar5.jpeg";
import webinar6 from "./Img/webinar6.jpeg";
import webinar7 from "./Img/webinar7.jpeg";
import webinar8 from "./Img/webinar8.jpeg";
import SignupForm from "./SignupForm";

function HighLights() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const videos = [video1, video2, video3, video4];
  const images = [
    webinar1,
    webinar2,
    webinar3,
    webinar4,
    webinar5,
    webinar6,
    webinar7,
    webinar8,
  ];

  return (
    <section id="highlights" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeInOnScroll>
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-10 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Highlights From Our Previous Seminars
          </h2>
        </FadeInOnScroll>

        {/* Unified grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {videos.map((vid, idx) => (
            <FadeInOnScroll key={idx}>
              <div className="relative group rounded-xl overflow-hidden shadow-lg">
                <video
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                  controls
                  autoPlay
                  muted
                  loop
                >
                  <source src={vid} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    Webinar Video Highlight
                  </span>
                </div>
              </div>
            </FadeInOnScroll>
          ))}

          {images.map((img, idx) => (
            <FadeInOnScroll key={idx}>
              <div
                className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openModal(img)}
              >
                <img
                  src={img}
                  alt={`Webinar Highlight ${idx + 1}`}
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    Highlight {idx + 1}
                  </span>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        {/* Register Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowForm(true)}
            className="relative px-8 md:px-20 py-3 font-semibold text-white rounded-full 
              bg-gradient-to-r from-blue-600 to-green-600 
              overflow-hidden transition-transform duration-300 
              hover:scale-110 hover:rotate-1"
          >
            <span className="relative z-10">Register Now</span>
            <span className="glow-slide"></span>
          </button>
        </div>

        {showForm && <SignupForm onClose={() => setShowForm(false)} />}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl w-full p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected Webinar Highlight"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <button
              className="absolute top-3 right-3 bg-white text-gray-800 rounded-full p-2 hover:bg-gray-100 transition"
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
