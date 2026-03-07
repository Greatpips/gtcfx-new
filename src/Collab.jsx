import Translogo from "./Img/trans-logo.png";
import GtcLogos from "./Img/dark-logo.webp";
import { FaHandshake } from "react-icons/fa";

function Collab() {
  return (
    <div className=" p-2 pt-[2em]    bg-gray-100 flex flex-col items-center justify-center font-sans">
      <h1 className="text-xl sm:text-2xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2 sm:mb-4 text-center">
        In Collaboration with GTCFX
      </h1>
      <div className="flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6">
        <div className="flex-shrink-0">
          <img
            src={Translogo}
            alt="Translogo"
            className="h-20 sm:h-16 md:h-70 w-auto object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/100x100/ef4444/ffffff?text=Image+Error";
            }}
          />
        </div>
        <div className="flex-shrink-0">
          <FaHandshake
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-600"
            aria-label="Handshake Icon"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src={GtcLogos}
            alt="GTCFX Logo"
            className="h-12 sm:h-12 md:h-16 w-auto object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/100x100/ef4444/ffffff?text=Image+Error";
            }}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-[2em]">
         <button
      
                  
                    className="relative px-8 md:px-20 py-3 text-white rounded-full 
                    bg-gradient-to-r from-blue-600 to-green-600 
                    overflow-hidden transition-transform duration-300 
                    hover:scale-110 hover:rotate-1"
                  >
                    <span className="relative z-10"><a href="https://mygtcportal.com/getview?view=register&token=ejtowwwwqowwwwww" className="font-semibold">Register With Gtcfx Now</a></span>
                    <span className="glow-slide"></span>
                  </button>
      </div>
    </div>
  );
}

export default Collab;