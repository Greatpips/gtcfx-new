import React, { useState, useEffect } from 'react';
import FadeIn from './FadeInOnScroll';
import award1 from './Img/award1.webp';
import award2 from './Img/award2.webp';
import award3 from './Img/award3.webp';
import award4 from './Img/award4.webp';
import award5 from './Img/award5.webp';
import award6 from './Img/award6.webp';
import award7 from './Img/award7.webp';
import award8 from './Img/award8.webp';
import award9 from './Img/award9.webp';
import award10 from './Img/award10.webp';
import award11 from './Img/award11.webp';
import award12 from './Img/award12.webp';


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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [status, setStatus] = useState(null);
  

  // Added formData state for inputs


 

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

  // To create a seamless loop, we double the array
  const duplicatedImages = [...images, ...images];

  return (
    <div className="pt-20 text-center pb-[3em] bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Some Of GTCFX Awards</h2>
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
          animation: slide 10s linear infinite;
        }
      `}</style>
      <div className="relative overflow-hidden w-full">
        <FadeIn>
          <div className="flex animate-slide">
            {duplicatedImages.map((src, index) => (
              <div key={index} className="flex-none w-1/3 p-2">
                <img
                  src={src}
                  alt={`Award ${index + 1}`}
                  className="w-[150px] h-auto rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
      <div className="flex justify-center items-center mt-[4em]">
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

export default AwardSlider;