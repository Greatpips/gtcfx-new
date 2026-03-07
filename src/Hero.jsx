import { useState } from "react";
import Design from './Img/background-img.png'
import FadeInOnScroll from "./FadeInOnScroll";
import Logo from './Img/mobile-img.png'
import SignupForm from "./SignupForm";

export default function Hero() {
    const [showForm, setShowForm] = useState(false);
  
  return (
    <section className="relative w-full mt-22 " id="home">
      <div className="relative block md:hidden w-full">
        <img
          src={Logo}
          alt="Mobile Banner"
          className="w-full h-auto object-contain"
        />
        <div className="absolute md:top-1/2 md:right-1/4 right-1/5 top-1/2 w-full flex justify-center">
          <FadeInOnScroll>
            <button 

            onClick={() => setShowForm(true)}
              className="relative px-6 py-1 sm:px-12 sm:py-3 font-semibold text-white rounded-full 
              bg-gradient-to-r from-blue-600 to-green-600 
              overflow-hidden transition-transform duration-300 
              hover:scale-110 hover:rotate-1"
            >
              <span className="relative z-10">Register Now</span>
              <span className="glow-slide"></span>
            </button>
          </FadeInOnScroll>
        </div>
      </div>

      {/* Desktop Image + Button */}
       <div className="relative hidden md:block w-full">
        <img
          src={Design}
          alt="Desktop Banner"
          className="w-full h-auto object-contain"
        />
        <div className="absolute bottom-1/4 right-1/5  w-full flex justify-center ">
          <FadeInOnScroll>
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
          </FadeInOnScroll>
        </div>
      </div>
      {showForm && <SignupForm onClose={() => setShowForm(false)} />}
    </section>
  );
}
