import React, { useState, useEffect } from 'react';
import FadeIn from './FadeInOnScroll';
import star from './Img/stars.png';
import SignupForm from "./SignupForm";

const Testi = () => {
  const allMessages = [
    {
      text: "The Profit Matrix AI has completely transformed the way I approach trading. Before using it, I spent hours watching charts and trying to analyze the markets on my own. Now the system helps identify strong opportunities and provides clear insights that make decision-making much easier. It's simple to use, reliable, and it genuinely feels like having an intelligent trading assistant working for me around the clock. - Adaeze M., Lagos",
    },
    {
      text: "I've tried different trading tools before, but Profit Matrix AI stands out. The way it analyzes market data and presents useful insights has helped me become more confident with my trades. Instead of feeling overwhelmed by charts and indicators, I can rely on the AI to simplify the process. It really feels like having a professional trading assistant working for you every day. - Aisha A., Abuja",
    },
    {
      text: "Using Profit Matrix AI has made a big difference in how I trade. The system analyzes the market quickly and highlights opportunities that I would normally miss when trading manually. I also like how simple the interface is — everything is clear and easy to understand. It's like having an intelligent trading system helping you stay one step ahead of the market. - Samuel O., Lagos",
    },
    {
      text: "The Profit Matrix AI has helped me approach trading with much more confidence. It continuously scans the markets and identifies potential opportunities that would take hours to find manually. What impressed me most is how reliable the insights are and how easy the system is to use. It has definitely made trading a more structured and less stressful experience. - David E., Port Harcourt",
    },
    {
      text: "Since I started using Profit Matrix AI, trading has become much more efficient for me. The platform provides smart market insights and helps highlight strong setups that I might have overlooked on my own. It reduces the need to constantly monitor the charts and makes the entire trading process feel more organized and controlled. - Sadiq A., Kano",
    },
    {
      text: "One of the things I appreciate most about Profit Matrix AI is how it simplifies complex market movements. The system processes a lot of market data and turns it into insights that are easy to understand. It has helped me stay disciplined with my trading and focus on better opportunities rather than guessing market direction. - Blessing U., Lagos",
    },
  ];

  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [itemVisible, setItemVisible] = useState([false, false, false]);
  const [showForm, setShowForm] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [status, setStatus] = useState(null);
  

  // Added formData state for inputs
 
  // Added your working Google Apps Script URL


  useEffect(() => {
    let currentPage = 0;

    const switchMessages = () => {
      currentPage = currentPage === 0 ? 1 : 0;
      setDisplayedMessages(allMessages.slice(currentPage * 3, currentPage * 3 + 3));
      setItemVisible([false, false, false]);
      setTimeout(() => setItemVisible([true, false, false]), 200);
      setTimeout(() => setItemVisible([true, true, false]), 500);
      setTimeout(() => setItemVisible([true, true, true]), 900);
    };

    setDisplayedMessages(allMessages.slice(0, 3));
    setTimeout(() => setItemVisible([true, false, false]), 100);
    setTimeout(() => setItemVisible([true, true, false]), 500);
    setTimeout(() => setItemVisible([true, true, true]), 900);

    const interval = setInterval(switchMessages, 6000);

    return () => clearInterval(interval);
  }, []);
  
  // New useEffect hook to handle form success and trigger the Facebook Pixel event
  useEffect(() => {
    if (status === 'succeeded') {
      if (typeof fbq !== 'undefined') {
        fbq('track', 'CompleteRegistration');
      }
      setShowSuccessModal(true);
      closeForm();
    }
  }, [status]);

  // Added handleChange function to update form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Updated handleSubmit function to use fetch
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const urlEncodedData = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: urlEncodedData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setStatus('succeeded');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="testimonials" className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 bg-gray-100">
      <div className="w-full max-w-[90%] sm:max-w-4xl mx-auto">
        <h2
          className="capitalize text-[1.5rem] xs:text-[2rem] sm:text-3xl text-center font-bold bg-gradient-to-r from-blue-950 to-[rgb(184,136,82)] bg-clip-text text-transparent
                 before:from-blue-950 before:to-[rgb(184,136,82)]  mb-6 sm:mb-8 md:mb-12"
        >
          Some of Our Traders Success stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 xs:gap-6" aria-live="polite">
          {displayedMessages.map((testimonial, index) => (
            <div
              key={index}
              className={`p-4 xs:p-6 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col transition-opacity duration-500 ease-in-out
                ${itemVisible[index] ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={star}
                alt="Five-star rating"
                className="w-25 xs:w-8 h-6 xs:h-8 mb-2"
              />
              <p
                className="text-gray-600 text-[0.9rem] xs:text-[1rem] sm:text-[1.1rem] font-medium leading-relaxed flex-grow"
              >
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

       
      </div>
      <div className="flex justify-center items-center mt-[4em]">
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
        {showForm && <SignupForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Testi;