"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import CollaborationCard from "./features/CollaborationCard";
import EaseOfUseCard from "./features/EaseOfUseCard";
import CloudCard from "./features/CloudCard";
import IntegrationCard from "./features/IntegrationCard";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const Features = () => {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRowOneRef = useRef(null);
  const cardsRowTwoRef = useRef(null);

  // Check if elements are in view
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  const isRowOneInView = useInView(cardsRowOneRef, {
    once: false,
    amount: 0.3,
  });
  const isRowTwoInView = useInView(cardsRowTwoRef, {
    once: false,
    amount: 0.3,
  });

  // Animation variants
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4,
      },
    },
  };

  // Updated card row variants with collision effect
  const cardRowVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delayChildren: custom * 0.2,
      },
    }),
  };

  // Left card variants - coming from left
  const leftCardVariants = {
    hidden: { opacity: 0, x: -100, rotate: -2 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        duration: 0.7,
      },
    },
    collision: {
      scale: [1, 1.05, 0.95, 1.02, 1],
      x: [0, -10, 2, -4, 0],
      filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
      transition: {
        duration: 0.6,
        times: [0, 0.2, 0.5, 0.8, 1],
        ease: "easeInOut",
        delay: 0.7, // Delay to start after the card has arrived
      },
    },
  };

  // Right card variants - coming from right
  const rightCardVariants = {
    hidden: { opacity: 0, x: 100, rotate: 2 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 15,
        duration: 0.7,
      },
    },
    collision: {
      scale: [1, 1.05, 0.95, 1.02, 1],
      x: [0, 10, -2, 4, 0],
      filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
      transition: {
        duration: 0.6,
        times: [0, 0.2, 0.5, 0.8, 1],
        ease: "easeInOut",
        delay: 0.7, // Delay to start after the card has arrived
      },
    },
  };

  // Parallax effect for the background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <motion.div
      ref={sectionRef}
      className="w-full flex items-center z-30 mt-8 md:mt-12 lg:mt-16 mb-4 md:mb-6 lg:mb-8 justify-start text-center flex-col gap-[20px] md:gap-[30px] lg:gap-[40px] relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {/* Animated background element */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-30 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/3 left-1/4 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] rounded-full bg-[#6B49FF] opacity-20 blur-[80px] md:blur-[100px] lg:blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[125px] sm:w-[175px] md:w-[200px] lg:w-[250px] h-[125px] sm:h-[175px] md:h-[200px] lg:h-[250px] rounded-full bg-[#49A3FF] opacity-15 blur-[60px] md:blur-[80px] lg:blur-[100px]" />
      </motion.div>

      <div
        ref={titleRef}
        className="w-full flex items-center justify-start text-center flex-col"
      >
        <motion.button
          className="outline-none w-[83px] h-[35px] mt-2 rounded-[200px] border-[0.8px] border-[#6B49FF]/[0.2] bg-radial from-[#181620] via-[#1E1930] to-[#332C4F] flex items-center justify-center text-[14px] font-normal leading-[100%] tracking-[-1%] cursor-pointer"
          style={{
            boxShadow: "0px -4px 12px 0px #6B49FF99 inset",
          }}
          variants={badgeVariants}
          animate={isTitleInView ? "visible" : "hidden"}
        >
          Amazing
        </motion.button>

        <motion.h1
          className="bg-gradient-to-r text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-medium leading-[1.2] md:leading-[1.3] lg:leading-[71px] tracking-[-3.2%] from-[#989CA5] via-white to-[#989CA5] inline-block text-transparent bg-clip-text px-4"
          variants={paragraphVariants}
          animate={isTitleInView ? "visible" : "hidden"}
        >
          Features and benefits
        </motion.h1>

        <motion.p
          className="text-[16px] md:text-[18px] font-normal leading-[1.6] md:leading-[25px] tracking-[-1.4%] text-[#BEBEBE] max-w-[90%] md:max-w-[80%] lg:max-w-none px-4"
          variants={paragraphVariants}
          animate={isTitleInView ? "visible" : "hidden"}
        >
          Create, customize, and collaborate effortlessly with our intuitive
          platform. <br className="hidden md:block" /> From simple edits to
          complex designs, bring your vision to life in no time.
        </motion.p>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-[15px] sm:gap-[20px] lg:gap-[20px] mt-6 md:mt-8 lg:mt-10">
        <motion.div
          ref={cardsRowOneRef}
          className="w-full md:w-full flex flex-col lg:flex-row items-center justify-center gap-[15px] relative"
          variants={cardRowVariants}
          custom={0}
          animate={isRowOneInView ? "visible" : "hidden"}
        >
          <motion.div
            className="row-one-card w-[90%] sm:w-[80%] md:w-full lg:w-auto"
            variants={leftCardVariants}
            animate={isRowOneInView ? ["visible", "collision"] : "hidden"}
          >
            <EaseOfUseCard />
          </motion.div>

          {/* Collision effect for row one - only show on tablet and up */}
          {isRowOneInView && (
            <motion.div
              className="absolute z-10 w-10 h-10 top-1/2 left-1/2 -ml-5 -mt-5 pointer-events-none hidden md:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 3],
                background:
                  "radial-gradient(circle, rgba(107,73,255,0.7) 0%, rgba(107,73,255,0) 70%)",
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 1.5, // Time after cards meet
              }}
            />
          )}

          <motion.div
            className="row-one-card w-[90%] sm:w-[80%] md:w-full lg:w-auto"
            variants={rightCardVariants}
            animate={isRowOneInView ? ["visible", "collision"] : "hidden"}
          >
            <CollaborationCard />
          </motion.div>
        </motion.div>

        <motion.div
          ref={cardsRowTwoRef}
          className="w-full md:w-full flex flex-col lg:flex-row items-center justify-center gap-[15px] relative"
          variants={cardRowVariants}
          custom={1}
          animate={isRowTwoInView ? "visible" : "hidden"}
        >
          <motion.div
            className="row-two-card w-[90%] sm:w-[80%] md:w-full lg:w-auto"
            variants={leftCardVariants}
            animate={isRowTwoInView ? ["visible", "collision"] : "hidden"}
          >
            <CloudCard />
          </motion.div>

          {/* Collision effect for row two - only show on tablet and up */}
          {isRowTwoInView && (
            <motion.div
              className="absolute z-10 w-10 h-10 top-1/2 left-1/2 -ml-5 -mt-5 pointer-events-none hidden md:block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.5, 3],
                background:
                  "radial-gradient(circle, rgba(73,163,255,0.7) 0%, rgba(73,163,255,0) 70%)",
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 1.6, // Time after cards meet
              }}
            />
          )}

          <motion.div
            className="row-two-card w-[90%] sm:w-[80%] md:w-full lg:w-auto "
            variants={rightCardVariants}
            animate={isRowTwoInView ? ["visible", "collision"] : "hidden"}
          >
            <IntegrationCard />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements for visual interest */}
      <motion.div
        className="absolute -left-10 top-1/4 w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-r from-[#6B49FF] to-[#49A3FF] rounded-full opacity-60 hidden sm:block"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[10%] bottom-1/4 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-gradient-to-r from-[#49A3FF] to-[#6B49FF] rounded-full opacity-70 hidden sm:block"
        animate={{
          y: [0, 20, 0],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute right-[30%] top-[20%] w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full opacity-30 hidden sm:block"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </motion.div>
  );
};

export default Features;
