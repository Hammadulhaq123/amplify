"use client"
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ card, index, isInView }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: index * 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  // Icon animation variants
  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.2,
      },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      key={card.id}
      className="w-full h-[160px] flex flex-col justify-center gap-4 items-center relative"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
    >
      {/* Background glow effect that appears on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none -z-10 opacity-0 rounded-xl"
        animate={{
          opacity: isHovered ? 0.15 : 0,
          background:
            card.id % 2 === 0
              ? "radial-gradient(circle, rgba(107,73,255,0.3) 0%, rgba(107,73,255,0) 70%)"
              : "radial-gradient(circle, rgba(73,163,255,0.3) 0%, rgba(73,163,255,0) 70%)",
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Pulsing ring animation */}
      {isHovered && (
        <motion.div
          className="absolute -z-10 w-12 h-12 rounded-full pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0.8, 1.6, 2],
            background:
              card.id % 2 === 0
                ? "radial-gradient(circle, rgba(107,73,255,0.4) 0%, rgba(107,73,255,0) 70%)"
                : "radial-gradient(circle, rgba(73,163,255,0.4) 0%, rgba(73,163,255,0) 70%)",
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      )}

      <motion.div
        variants={iconVariants}
        className={`flex items-center justify-center p-2 ${
          card.id % 2 === 0 ? "bg-[#6B49FF]/10" : "bg-[#49A3FF]/10"
        } rounded-full`}
        animate={
          isInView
            ? {
                boxShadow: isHovered
                  ? [
                      "0 0 0 rgba(107, 73, 255, 0)",
                      "0 0 10px rgba(107, 73, 255, 0.3)",
                      "0 0 0 rgba(107, 73, 255, 0)",
                    ]
                  : "none",
              }
            : "hidden"
        }
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        <Image
          src={card.icon}
          alt={`icon-${card.id}`}
          width={18.67}
          height={26.67}
          className={`${
            card.scaleIcon ? "scale-125" : ""
          } transition-all duration-300 ${
            isHovered ? "rotate-[360deg] scale-110" : ""
          }`}
          style={{
            transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        />
      </motion.div>

      <motion.div
        className="w-auto h-auto flex flex-col gap-1 justify-center items-center"
        variants={textVariants}
      >
        <motion.h3
          className="text-[20px] font-semibold leading-[10%0] tracking-[-0.4%] text-white"
          animate={{
            color: isHovered
              ? card.id % 2 === 0
                ? "#b19dff"
                : "#9dccff"
              : "#ffffff",
          }}
          transition={{ duration: 0.3 }}
        >
          {card.title}
        </motion.h3>

        <motion.p
          className="w-[237px] text-[12px] font-normal leading-[16px] tracking-[-0.4%] text-[#BEBEBE]"
          animate={{
            opacity: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          {card.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Card;
