import * as React from "react";
import { motion } from "framer-motion";

const container = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const circle = {
  start: { cy: 16 },
  end: {
    cy: 8,
  },
};

const circleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

const LoadingAnimation = () => (
  <div className="loading-animation">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="32"
      variants={container}
      initial="start"
      animate="end"
    >
      <motion.circle
        cx="15.97"
        cy="16"
        r="8"
        variants={circle}
        transition={circleTransition}
      />
      <motion.circle
        cx="40"
        cy="16"
        r="8"
        variants={circle}
        transition={circleTransition}
      />
      <motion.circle
        cx="64.03"
        cy="16"
        r="8"
        variants={circle}
        transition={circleTransition}
      />
    </motion.svg>
  </div>
);
export default LoadingAnimation;
