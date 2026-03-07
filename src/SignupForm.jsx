import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function SignupForm({ onClose }) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      // NEW GOOGLE SHEETS SCRIPT URL
      const scriptURL = "https://script.google.com/macros/s/AKfycbx_acq9YRFYNdTnHeZ_4KKxqOdZ-Uonv9hhcYCDMgarZ_UBXfFDUxNBNKNzq3frahBDyA/exec";

      const params = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
      }).toString();

      await fetch(scriptURL + "?" + params, {
        method: "GET",
      });

      // Show success section
      setSubmitted(true);

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong. Try again.");
    }

    setLoading(false);
  };

  // WhatsApp section (COMMENTED OUT for future use)

  /*
  const whatsappNumber = "2347080916653";
  const whatsappMessage = `Hi, my name is ${formData.name}. I just signed up via your website.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  */

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-11/12 max-w-md relative transform transition-all duration-500 scale-95 opacity-0 animate-[fadePop_0.5s_ease-out_forwards]">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <IoClose size={28} />
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-blue-950 to-[rgb(184,136,82)] bg-clip-text text-transparent">
              Register Now
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-950"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[rgb(184,136,82)]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-950"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full relative px-6 py-3 font-semibold text-white rounded-full bg-gradient-to-r from-blue-950 to-[rgb(184,136,82)] overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <span className="relative z-10">
                  {loading ? "Submitting..." : "Submit"}
                </span>
                <span className="glow-slide"></span>
              </button>

            </form>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold text-center mb-4">
              🎉 Registration Successful
            </h2>

            {/* WhatsApp button disabled for now */}

            {/*
            <div className="flex gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold bg-green-600 hover:bg-green-700 transition"
              >
                <FaWhatsapp className="text-2xl" />
                Chat on WhatsApp
              </a>
            </div>
            */}

            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 font-semibold"
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}