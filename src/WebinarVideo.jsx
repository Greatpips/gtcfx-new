import React, { useRef, useEffect, useState } from "react";

function WebinarVideo() {
  const iframeRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
        }
      },
      { threshold: 0.5 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) observer.unobserve(iframeRef.current);
    };
  }, []);

  // Construct YouTube URL based on mute state
  const videoSrc = play
    ? `https://www.youtube.com/embed/MDV_WWkgLDQ?autoplay=1&mute=${muted ? 1 : 0}&si=FjDa_T8YNjdOR0Y8`
    : "https://www.youtube.com/embed/MDV_WWkgLDQ?si=FjDa_T8YNjdOR0Y8";

  return (
    <section className="w-full py-10 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-950 via-[rgb(184,136,82)] to-[rgb(184,136,82)] bg-clip-text text-transparent">
          Watch Our Webinar
        </h2>

        {/* Subtext */}
        <p className="text-center text-gray-700 mb-10 text-lg max-w-3xl mx-auto">
          Discover how <span className="font-semibold text-blue-950">Profit Matrix AI</span> 
          analyzes financial markets and helps traders identify high-probability opportunities 
          using advanced trading intelligence.
        </p>

        {/* Video Container */}
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-gray-200">
          <div className="relative pb-[56.25%] h-0" ref={iframeRef}>

            {/* Iframe */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoSrc}
              title="Profit Matrix AI Webinar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            {/* Click to Unmute Overlay */}
            {muted && (
              <button
                onClick={() => setMuted(false)}
                className="absolute bottom-4 right-4 bg-blue-950 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-800 transition"
              >
                🔊 Unmute
              </button>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

export default WebinarVideo;