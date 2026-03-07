// src/components/animations/SlideInRight.jsx
import React from "react";
import { motion } from "framer-motion";

const SlideInRight = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} // 👈 re-run animation every time
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInRight;
