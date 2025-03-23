"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { motion, useInView, useAnimation } from "framer-motion";

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Custom typewriter implementation
  const [firstLine, setFirstLine] = useState("");
  const [dynamicText, setDynamicText] = useState("");
  const [animationsText, setAnimationsText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [animationPhase, setAnimationPhase] = useState("idle");
  const [isFirstRun, setIsFirstRun] = useState(true);

  // Full text values
  const firstLineComplete = "Transform Concepts into,";
  const dynamicComplete = "Dynamic";
  const animationsComplete = " Animations";

  // Start animation when component is in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");

      // If animation is complete and coming back into view, restart it
      if (animationPhase === "complete" || animationPhase === "idle") {
        setAnimationPhase("idle");
        const timeout = setTimeout(() => {
          setAnimationPhase("typing-first-line");
          setFirstLine("");
          setDynamicText("");
          setAnimationsText("");
        }, 100);

        return () => clearTimeout(timeout);
      }
    } else {
      // Reset animations when out of view
      controls.start("hidden");
    }
  }, [isInView, controls, animationPhase]);

  useEffect(() => {
    if (!isInView) return;

    let timeout;

    // Start animation sequence if not already running
    if (animationPhase === "idle") {
      setAnimationPhase("typing-first-line");
      setFirstLine("");
      setDynamicText("");
      setAnimationsText("");
    }

    // Typing first line
    if (animationPhase === "typing-first-line") {
      if (firstLine.length < firstLineComplete.length) {
        timeout = setTimeout(() => {
          setFirstLine(firstLineComplete.slice(0, firstLine.length + 1));
        }, 70);
      } else {
        setAnimationPhase("typing-dynamic");
      }
    }

    // Typing "Dynamic"
    else if (animationPhase === "typing-dynamic") {
      if (dynamicText.length < dynamicComplete.length) {
        timeout = setTimeout(() => {
          setDynamicText(dynamicComplete.slice(0, dynamicText.length + 1));
        }, 70);
      } else {
        setAnimationPhase("typing-animations");
      }
    }

    // Typing "Animations"
    else if (animationPhase === "typing-animations") {
      if (animationsText.length < animationsComplete.length) {
        timeout = setTimeout(() => {
          setAnimationsText(
            animationsComplete.slice(0, animationsText.length + 1)
          );
        }, 70);
      } else {
        setAnimationPhase("complete");
      }
    }

    return () => clearTimeout(timeout);
  }, [
    isInView,
    firstLine,
    dynamicText,
    animationsText,
    animationPhase,
    firstLineComplete,
    dynamicComplete,
    animationsComplete,
  ]);

  // Blinking cursor effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  // Image animation variants
  const leftImageVariants = {
    hidden: { x: -150, rotate: -15, opacity: 0 },
    visible: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  const centerImageVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const rightImageVariants = {
    hidden: { x: 150, rotate: 15, opacity: 0 },
    visible: {
      x: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="w-full h-auto flex flex-col justify-start items-center overflow-hidden lg:overflow-visible"
    >
      <Navbar />
      <div className="w-[95%] md:w-[90%] lg:w-full flex items-center z-30 mt-4 sm:mt-6 justify-start text-center flex-col gap-[20px] md:gap-[30px]">
        <h1 className="typewriter-container  h-40 md:h-56 lg:h-24 bg-gradient-to-r text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-medium leading-[1.15] md:leading-[71px] tracking-[-3.2%] from-[#989CA5] via-white to-[#989CA5] inline-block text-transparent bg-clip-text min-h-[100px] md:min-h-[142px] px-4 lg:px-0">
          {firstLine}
          <br />
          <span className="dynamic-text">{dynamicText}</span>
          {animationsText}
          {showCursor && <span className="cursor"></span>}
        </h1>
        <p className="text-[16px] md:text-[18px] font-normal leading-[1.5] md:leading-[25px] tracking-[-1.4%] text-[#BEBEBE] px-4 md:px-0 max-w-[90%] md:max-w-[80%] lg:max-w-none">
          Unleash your creativity with our intuitive animation tool. Create
          stunning <br className="hidden md:block" />
          videos and bring your vision to life in just a few clicks!
        </p>

        <motion.div
          className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-[12px] px-6 sm:px-0"
          variants={buttonContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.button
            className="outline-none w-full sm:w-[113px] h-[46px] rounded-[12px] border-[0.6px] border-[#E0F2FF]/[0.4] bg-[#03263D] flex items-center justify-center text-[14px] md:text-[16px] font-semibold leading-[100%] tracking-normal cursor-pointer"
            style={{
              boxShadow: "0px 0px 10px 0px #0099FF inset",
            }}
            variants={buttonVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px 0px #0099FF inset",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Try it now
          </motion.button>
          <motion.button
            className="outline-none w-full sm:w-[162px] h-[46px] rounded-[12px] border-[0.8px] border-[#fff]/[0.12] bg-gradient-to-r from-[#1F1F1F] via-[#191919] to-[#0F0F0F] flex items-center justify-center text-[14px] md:text-[16px] font-semibold leading-[100%] tracking-normal cursor-pointer"
            variants={buttonVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#0F0F0F",
              borderColor: "rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book your demo
          </motion.button>
        </motion.div>
      </div>

      <div className="w-full flex items-center relative z-20 justify-center mt-6 md:mt-10">
        <div className="w-full h-full lg:w-[1193.4px] z-20 flex justify-start items-center gap-4">
          <motion.div
            variants={leftImageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            key="left-image"
          >
            <Image
              src="/extras/hero_1.svg"
              alt=""
              width={241.4}
              height={610}
              className="w-auto"
              priority
            />
          </motion.div>

          <motion.div
            // variants={centerImageVariants}
            // initial="hidden"
            // animate={isInView ? "visible" : "hidden"}
            key="center-image"
          >
            <Image
              src="/extras/hero_2.svg"
              alt=""
              width={711}
              height={610}
              className="w-auto"
              priority
            />
          </motion.div>
          <motion.div
            variants={rightImageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            key="right-image"
          >
            <Image
              src="/extras/hero_3.svg"
              alt=""
              width={241.4}
              height={610}
              className="w-auto"
              priority
            />
          </motion.div>
        </div>
        {/* <Image
          src="/extras/hero_mockupp.svg"
          alt=""
          width={1193.4}
          height={610}
          className="w-[95%] md:w-[90%] lg:w-[1193.4px] lg:ml-16 z-20"
          priority
        /> */}
        <img
          src="/extras/radial_hero2.png"
          alt=""
          className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 w-full lg:w-[1035px]"
        />
        <img
          src="/extras/radial_hero.png"
          alt=""
          className="absolute -bottom-48 left-1/2 z-10 -translate-x-1/2 w-full lg:w-[1035px]"
        />
      </div>

      <style jsx global>{`
        .typewriter-container {
          min-height: 100px;
          display: block;
          text-align: center;
          width: 100%;
          max-width: 95%;
          margin: 0 auto;
        }

        .dynamic-text {
          background: linear-gradient(to right, #00aeff, #1778ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }

        .cursor {
          display: inline-block;
          margin-left: 2px;
        }

        @media (min-width: 768px) {
          .typewriter-container {
            min-height: 142px;
            max-width: 90%;
          }
        }

        @media (min-width: 1024px) {
          .typewriter-container {
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
