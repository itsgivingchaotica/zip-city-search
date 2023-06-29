import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import "../../App.css";

const AnimatedTextCharacter = ({ text }) => {
  //NUMBER OF LETTERS IN THE TEXT 
  const letters = Array.from(text);
  //SET THE MOBILE SCREENSIZE
  const isMobileScreen = useMediaQuery("(max-width: 414px)");
  //DEFINE ANIMATION CONTAINER
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.05 * i },
    }),
  };
  //DEFINE ANIMATED CHARACTERS
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 11,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    // ANIMATION CONTAINER
    <motion.div
      style={{
        display: "flex",
        transform: isMobileScreen ? "scale(0.5)" : "auto",
        minWidth: isMobileScreen ? "320px" : "800px",
        marginLeft: isMobileScreen ? "-15px" : "auto",
      }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
    {/* ANIMATED CHARACTERS */}
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{
            // ALLOW VARIATION OF STYLE ON THE `WHERE` 
            fontSize: index >= 13 && index <= 18 ? "3rem" : "2rem",
            color: index >= 13 && index <= 18 ? "var(--oxford-blue)" : "white",
            fontWeight: index >= 13 && index <= 18 ? "bold" : "normal",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* CONVERT TO UTF-8*/}
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
