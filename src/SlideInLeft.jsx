// src/components/animations/SlideInLeft.jsx
import React from "react";
import { motion } from "framer-motion";

const SlideInLeft = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} // 👈 triggers every time in view
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInLeft;
