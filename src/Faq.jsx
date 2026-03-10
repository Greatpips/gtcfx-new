import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do i need to pay for the Bot?",
      answer:
        " No this Bot is Free for all registered and funded account",
    },
    {
      question: "How much can i make monthly?",
      answer:
        "This Bot makes between 5-10% monthly on average",
    },
    {
      question: "Can i loose my money on this Bot?",
      answer:
        "We have proper risk management that safe guards your capital and you can set it at 30% or above. This means 70% of your capital is safe when you put it at 30% risk",
    }
    
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-950 via-[rgb(184,136,82)] to-[rgb(184,136,82)] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 font-semibold text-blue-950 text-lg"
              >
                {faq.question}
                <span className="text-[rgb(184,136,82)] text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-6 pb-6 text-gray-700 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Faq;