import React from 'react';
import { motion } from 'framer-motion';

export const ScrollReveal = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    scale: { scale: 0.8, opacity: 0 }
  };

  const initialVariant = directions[direction] || directions.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...initialVariant }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
