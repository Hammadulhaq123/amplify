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

  // Start animation when component is first in view
  useEffect(() => {
    if (isInView) {
      if (isFirstRun) {
        setIsFirstRun(false);
        controls.start("visible");
      }

      // If animation is complete, restart it
      if (animationPhase === "complete") {
        const timeout = setTimeout(() => {
          setAnimationPhase("idle");
        }, 2000);

        return () => clearTimeout(timeout);
      }
    }
  }, [isInView, isFirstRun, controls, animationPhase]);

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

  return (
    <div
      ref={sectionRef}
      className="w-full h-auto flex flex-col justify-start items-center"
    >
      <Navbar />
      <div className="w-full flex items-center z-30 mt-6 justify-start text-center flex-col gap-[30px]">
        <h1 className="typewriter-container bg-gradient-to-r text-[64px] font-medium leading-[71px] tracking-[-3.2%] from-[#989CA5] via-white to-[#989CA5] inline-block text-transparent bg-clip-text min-h-[142px]">
          {firstLine}
          <br />
          <span className="dynamic-text">{dynamicText}</span>
          {animationsText}
          {showCursor && <span className="cursor"></span>}
        </h1>
        <p className="text-[18px] font-normal leading-[25px] tracking-[-1.4%] text-[#BEBEBE]">
          Unleash your creativity with our intuitive animation tool. Create
          stunning <br />
          videos and bring your vision to life in just a few clicks!
        </p>

        <motion.div
          className="w-auto flex items-center justify-center gap-[12px]"
          variants={buttonContainerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.button
            className="outline-none w-[113px] h-[46px] rounded-[12px] border-[0.6px] border-[#E0F2FF]/[0.4] bg-[#03263D] flex items-center justify-center text-[16px] font-semibold leading-[100%] tracking-normal cursor-pointer"
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
            className="outline-none w-[162px] h-[46px] rounded-[12px] border-[0.8px] border-[#fff]/[0.12] bg-gradient-to-r from-[#1F1F1F] via-[#191919] to-[#0F0F0F] flex items-center justify-center text-[16px] font-semibold leading-[100%] tracking-normal cursor-pointer"
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

      <div className="w-full flex items-center relative z-20 justify-center">
        <Image
          src="/extras/hero_mockupp.svg"
          alt=""
          width={1193.4}
          height={610}
          className="w-full lg:w-[1193.4px] lg:ml-16 z-20"
        />
        <img
          src="/extras/radial_hero2.png"
          alt=""
          className="absolute -top-12 left-1/2 z-10 -translate-x-1/2"
        />
        <img
          src="/extras/radial_hero.png"
          alt=""
          className="absolute -bottom-12 left-1/2 z-10 -translate-x-1/2"
        />
      </div>

      <style jsx global>{`
        .typewriter-container {
          min-height: 142px; /* Accommodate two lines */
          display: block;
          text-align: center;
        }

        .dynamic-text {
          background: linear-gradient(to right, #00aeff, #1778ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .cursor {
          display: inline-block;
          margin-left: 2px;
        }
      `}</style>
    </div>
  );
};

export default Hero;
