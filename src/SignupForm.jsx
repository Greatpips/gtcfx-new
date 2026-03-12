import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function SignupForm({ onClose }) {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      // GOOGLE APPS SCRIPT URL
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbzDtrLtBWmjjgbtfOXXZMZ_Q4018kriFNIfINoP4kUTtCoZHznJIc_-YomJdQkiOC8/exec";

      const params = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        location: formData.location
      });

      await fetch(`${scriptURL}?${params}`, {
        method: "GET",
        mode: "no-cors"
      });

      setSubmitted(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        location: ""
      });

    } catch (error) {
      console.error(error);
      alert("❌ Submission failed. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-xl p-6 w-11/12 max-w-md relative transform transition-all duration-500 scale-95 opacity-0 animate-[fadePop_0.5s_ease-out_forwards]">

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

              <input
                type="text"
                name="location"
                placeholder="City / Country"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[rgb(184,136,82)]"
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