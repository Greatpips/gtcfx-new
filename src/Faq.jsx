import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Profit Matrix AI?",
      answer:
        "Profit Matrix AI is an advanced trading intelligence system designed to analyze CFD markets in real time. It uses powerful algorithms to scan global markets, identify high-probability opportunities, and provide data-driven insights to support smarter trading decisions.",
    },
    {
      question: "How does Profit Matrix AI work?",
      answer:
        "The AI continuously analyzes market data, price movements, and trading patterns across multiple financial instruments. By processing this information in real time, it highlights potential opportunities and provides insights that help traders make more informed decisions.",
    },
    {
      question: "Do I need trading experience to use it?",
      answer:
        "No. Profit Matrix AI is designed to be simple and user-friendly. Both beginners and experienced traders can benefit from the system’s market insights and analysis tools.",
    },
    {
      question: "Can I access Profit Matrix on mobile?",
      answer:
        "Yes. Profit Matrix AI can be accessed from desktop, tablet, or mobile devices, allowing you to monitor markets and insights anytime, anywhere.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. Security and data protection are a top priority. The platform uses modern security protocols to ensure user information and trading activity remain protected.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply register for an account, activate your access to Profit Matrix AI, and start exploring the market insights and analysis tools available on the platform.",
    },
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