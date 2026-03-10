import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Typewriter from "typewriter-effect";
import PaulImg from "./Img/AI-bot.png";
import { useState, useEffect } from 'react'
import SignupForm from "./SignupForm";
import SlideInLeft from "./SlideInLeft";


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
    <section id="about" className="relative w-full  bg-gray-100 overflow-hidden">
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
        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-950 via-[rgb(184,136,82)] to-[rgb(184,136,82)] bg-clip-text text-transparent"
      >
        {hasTyped ? (
          "Meet Paul Martins"
        ) : isInView ? (
          <Typewriter
            options={{
              strings: ["Meet Smart Earner Bot"],
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
        Smart Earner Bot is an advanced <span className="font-semibold text-blue-950">trading intelligence system </span>designed to <span className="font-semibold text-[rgb(184,136,82)]">analyze CFD markets</span> and <span className="font-semibold text-blue-950">identify high-probability opportunities</span>. Built with powerful market analysis algorithms, it monitors global financial markets in real time to deliver consistent data-driven insights and optimized trading performance.
      </p>
      <ul className="space-y-4 text-gray-800">
        <SlideInLeft delay={0.4}>
          <li className="flex items-start">
            <span className="text-blue-950 mr-2">•</span>
            <div>
              <span className="font-semibold"> AI-Powered Market Intelligence</span> – Advanced algorithms designed to analyze market data and identify high-probability CFD trading opportunities.
            </div>
          </li>
        </SlideInLeft>
        <SlideInLeft delay={0.5}>
          <li className="flex items-start">
            <span className="text-blue-950 mr-2">•</span>
            <div>
              <span className="font-semibold">Precision & Reliability</span> – Built on robust analytical systems and real-time data processing to deliver consistent market insights.
            </div>
          </li>
        </SlideInLeft>
        <SlideInLeft delay={0.6}>
          <li className="flex items-start">
            <span className="text-blue-950 mr-2">•</span>
            <div>
              <span className="font-semibold">Future-Focused Technology</span> – Continuously evolving through advanced machine learning models and market data optimization.
            </div>
          </li>
        </SlideInLeft>
      </ul> 
    </div>
  
</div>
{/* ================= AI Advantages & Steps Section ================= */}
<div className="max-w-7xl mx-auto px-6 mt-12">

  {/* Heading */}
  <SlideInLeft delay={0.1}>
    <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 
    bg-gradient-to-r from-blue-950 via-text-blue-950 to-[rgb(184,136,82)] 
    bg-clip-text text-transparent">
      How Smart Earner Bot Works
    </h3>
  </SlideInLeft>

  {/* Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    <SlideInLeft delay={0.2}>
      <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center hover:shadow-2xl transition duration-300 border border-gray-200 min-h-[160px] text-center">
        <h4 className="text-xl font-bold text-blue-950">
          1. Register a free trading account with GTCFX
        </h4>
      </div>
    </SlideInLeft>

    <SlideInLeft delay={0.3}>
      <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center hover:shadow-2xl transition duration-300 border border-gray-200 min-h-[160px] text-center">
        <h4 className="text-xl font-bold text-blue-950">
          2. Verify and fund your account
        </h4>
      </div>
    </SlideInLeft>

    <SlideInLeft delay={0.4}>
      <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center hover:shadow-2xl transition duration-300 border border-gray-200 min-h-[160px] text-center">
        <h4 className="text-xl font-bold text-blue-950">
          3. Connect your trading account to the Smart Earner Bot
        </h4>
      </div>
    </SlideInLeft>

    <SlideInLeft delay={0.5}>
      <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center hover:shadow-2xl transition duration-300 border border-gray-200 min-h-[160px] text-center">
        <h4 className="text-xl font-bold text-blue-950">
          4. Set your risk management
        </h4>
      </div>
    </SlideInLeft>

    <SlideInLeft delay={0.6}>
      <div className="bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center hover:shadow-2xl transition duration-300 border border-gray-200 min-h-[160px] text-center">
        <h4 className="text-xl font-bold text-blue-950">
          5. Monitor your trades and withdraw anytime
        </h4>
      </div>
    </SlideInLeft>

  </div>
</div>
{/* ================= End AI Advantages Section ================= */}
      <div className="container mx-auto px-6 md:px-12 lg:px-10">
       
 

      <div className="flex justify-center items-center pt-12">
         <button
      
                  onClick={() => setShowForm(true)}
                    className="relative px-8 md:px-20 py-3 font-semibold text-white rounded-full 
                    bg-gradient-to-r from-blue-950 to-[rgb(184,136,82)] 
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
