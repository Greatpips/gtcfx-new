import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Typewriter from "typewriter-effect";
import PaulImg from "./Img/Paul.JPG";
import { useState, useEffect } from 'react'
import certificate1 from "./Img/certificate1.jpeg"
import certificate2 from "./Img/certificate2.jpeg"
import certificate3 from "./Img/certificate3.jpeg"
import SignupForm from "./SignupForm";

import { FaRobot, FaBrain, FaUserGraduate, FaMobileAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import { MdOutlineSecurity, MdShowChart } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiEmotionHappyLine } from "react-icons/ri";
import SlideInLeft from "./SlideInLeft";
import SlideInRight from "./SlideInRight";
import FadeInOnScroll from "./FadeInOnScroll"

export default function AboutSection() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: false });
  const [hasTyped, setHasTyped] = useState(false);
    const [selectedCert, setSelectedCert] = useState(null);
  
  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  }

  const [showForm, setShowForm] = useState(false);
  

  return (
    <section id="about" className="relative w-full py-18 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-10">
        {/* Grid for About The Robot */}
        <div className="grid md:grid-cols gap-10 mb-20 items-center">
          {/* Text */}
           <SlideInLeft delay={0.3}>
             <h2 className="text-4xl text-center font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent
                 before:from-blue-600 before:to-green-600 pb-3">
              About The Smart Earner Bot
            </h2>
            <p className="text-lg text-[rgb(2,0,47)]">The Smart Earner Robot is an AI powered trading solution designed to simplify Forex and commodity trading. Built on a tested zone-based strategy and optimized for cent and standard accounts, it helps traders grow steadily with less stress and proper risk management. Whether you're a beginner with no trading knowledge or a busy professional, the robot takes care of trade execution while you focus on simple account management. No hype just smart, steady growth powered by AI.</p>

           </SlideInLeft>

        
         
        </div>


       <div className="mb-20">
      <SlideInRight>
        <h2 className="text-3xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          🔑 Advantages of the Smart Earner Robot
        </h2>
      </SlideInRight>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <SlideInRight>
          <div className="bg-white p-6 rounded-2xl shadow-lg min-h-[200px] flex flex-col">
            <FaRobot className="text-4xl mb-3 text-blue-600" />
            <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              AI-Powered Trading
            </h3>
            <p className="text-gray-700 mt-2 flex-grow line-clamp-3">
              Uses artificial intelligence to analyze market zones and execute trades with precision.
            </p>
          </div>
        </SlideInRight>

        <SlideInRight>
          <div className="bg-white p-6 rounded-2xl shadow-lg min-h-[200px] flex flex-col">
            <MdOutlineSecurity className="text-4xl mb-3 text-blue-600" />
            <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Stress-Free Trading
            </h3>
            <p className="text-gray-700 mt-2 flex-grow line-clamp-3">
              No need for long hours on charts or complex strategies — the robot does the heavy lifting.
            </p>
          </div>
        </SlideInRight>

        <SlideInRight>
          <div className="bg-white p-6 rounded-2xl shadow-lg min-h-[200px] flex flex-col">
            <MdShowChart className="text-4xl mb-3 text-blue-600" />
            <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Steady Growth, Not Hype
            </h3>
            <p className="text-gray-700 mt-2 flex-grow line-clamp-3">
              Focused on risk management and consistent account growth, avoiding reckless trading.
            </p>
          </div>
        </SlideInRight>

        <SlideInLeft>
          <div className="bg-white p-6 rounded-2xl shadow-lg min-h-[200px] flex flex-col">
            <FaUserGraduate className="text-4xl mb-3 text-blue-600" />
            <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Beginner-Friendly
            </h3>
            <p className="text-gray-700 mt-2 flex-grow line-clamp-3">
              Perfect for people with little or no trading knowledge — just plug in and manage basics like SL/TP.
            </p>
          </div>
        </SlideInLeft>

        <SlideInLeft>
          <div className="bg-white p-6 rounded-2xl shadow-lg min-h-[200px] flex flex-col">
            <GiTakeMyMoney className="text-4xl mb-3 text-blue-600" />
            <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Optimized for Cent Accounts
            </h3>
            <p className="text-gray-700 mt-2 flex-grow line-clamp-3">
              Allows traders to start small, grow steadily, and scale up over time.
            </p>
          </div>
        </SlideInLeft>

        <SlideInLeft>
          <div className="bg-white p-6 rounded-2xl shadow-lg min-h-[200px] flex flex-col">
            <FaMobileAlt className="text-4xl mb-3 text-blue-600" />
            <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Works on Any Device
            </h3>
            <p className="text-gray-700 mt-2 flex-grow line-clamp-3">
              Easy to monitor and manage from phones (iPhone/Android) or laptops.
            </p>
          </div>
        </SlideInLeft>

        <SlideInRight>
          <div className="bg-white p-6 rounded-2xl shadow-lg min-h-[200px] flex flex-col">
            <FaClock className="text-4xl mb-3 text-blue-600" />
            <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Saves Time
            </h3>
            <p className="text-gray-700 mt-2 flex-grow line-clamp-3">
              You don't have to watch the market all day — the robot trades automatically while you focus on other things.
            </p>
          </div>
        </SlideInRight>

        <SlideInRight>
          <div className="bg-white p-6 rounded-2xl shadow-lg min-h-[200px] flex flex-col">
            <RiEmotionHappyLine className="text-4xl mb-3 text-blue-600" />
            <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Emotion-Free Trading
            </h3>
            <p className="text-gray-700 mt-2 flex-grow line-clamp-3">
              Eliminates fear, greed, and overthinking — trades are executed purely on data and rules.
            </p>
          </div>
        </SlideInRight>

        <SlideInRight>
          <div className="bg-white p-6 rounded-2xl shadow-lg min-h-[200px] flex flex-col">
            <FaCheckCircle className="text-4xl mb-3 text-blue-600" />
            <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Proven Results
            </h3>
            <p className="text-gray-700 mt-2 flex-grow line-clamp-3">
              Built on a tested zone-based strategy with performance records.
            </p>
          </div>
        </SlideInRight>

        <SlideInLeft>
          <div className="bg-white p-6 rounded-2xl shadow-lg min-h-[200px] flex flex-col">
            <FaBrain className="text-4xl mb-3 text-blue-600" />
            <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Scalable & Flexible
            </h3>
            <p className="text-gray-700 mt-2 flex-grow line-clamp-3">
              Whether youre a beginner or an advanced trader, you can adjust settings and grow your account at your own pace.
            </p>
          </div>
        </SlideInLeft>
      </div>
    </div>

        
        {/* Grid for Paul Martins */}
       <div className="grid md:grid-cols-2 gap-8  max-w-6xl mx-auto px-4 py-12">
  {/* Image */}
  <div>
    <SlideInLeft>
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={PaulImg}
        alt="Paul Martins"
        className="w-full max-w-sm h-auto rounded-2xl shadow-2xl object-cover transition-transform duration-300 ease-in-out  hover:shadow-xl sway-image"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  </SlideInLeft>
</div>

  {/* Content */}
  <div className="space-y-6">
      <h2
        ref={headingRef}
        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 bg-clip-text text-transparent"
      >
        {hasTyped ? (
          "Meet Paul Martins"
        ) : isInView ? (
          <Typewriter
            options={{
              strings: ["Meet Paul Martins"],
              autoStart: true,
              loop: false,
              delay: 50,
              deleteSpeed: 999999999,
            }}
            onComplete={() => {
              setHasTyped(true);
            }}
          />
        ) : (
          ""
        )}
      </h2>
      <p className="text-lg text-gray-800 leading-relaxed">
        Paul is an experienced <span className="font-semibold text-blue-600">Portfolio Manager</span> with
        over <span className="font-semibold text-blue-600">7 years of expertise</span> in CFD trading and
        financial markets. He has managed diverse portfolios and delivered
        consistent growth for clients worldwide.
      </p>
      <ul className="space-y-4 text-gray-800">
        <SlideInLeft delay={0.4}>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <div>
              <span className="font-semibold">AI + Trading Expertise</span> - Pioneer in merging AI
              with portfolio management.
            </div>
          </li>
        </SlideInLeft>
        <SlideInLeft delay={0.5}>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <div>
              <span className="font-semibold">Certified Professional</span> - ISO 9001:2002, Peer
              Educator Trainer, and INT member.
            </div>
          </li>
        </SlideInLeft>
        <SlideInLeft delay={0.6}>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <div>
              <span className="font-semibold">Future-Focused</span> - Advancing toward PMP
              certification.
            </div>
          </li>
        </SlideInLeft>
        <SlideInLeft delay={0.7}>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <div>
              <span className="font-semibold">Leadership</span> - Simplifies complex concepts and
              builds lasting client trust.
            </div>
          </li>
        </SlideInLeft>
      </ul>
      <FadeInOnScroll delay={0.8}>
        <div className="mt-8">
          <h2 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent text-center">
            Some Of My Certified Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {[certificate1, certificate2, certificate3].map((cert, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => openModal(cert)}
              >
                <img
                  src={cert}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </FadeInOnScroll>

      {/* Modal for Certificate Pop-Up */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-3xl w-full p-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert}
              alt="Selected Certificate"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-2 right-2 bg-white text-blue-600 rounded-full p-2 hover:bg-gray-200 transition"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
    </div>
  
</div>

      <div className="flex justify-center items-center pt-5">
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
                

      </div>
      

      {showForm && <SignupForm onClose={() => setShowForm(false)} />}
    </section>
  );
}
