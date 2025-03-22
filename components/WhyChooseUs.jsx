"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Card from "./whychooseus/Card";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Card data in JSON format
const cardData = [
  {
    id: 1,
    icon: "/icons/mouse.png",
    title: "Intuitive User Experience",
    description:
      "Start a quick with a user-friendly interface designed for maximum easy and efficiency.",
    scaleIcon: false,
  },
  {
    id: 2,
    icon: "/icons/flash.png",
    title: "Boost Productivity",
    description: "Use pre-default transitions to save time and productivity.",
    scaleIcon: false,
  },
  {
    id: 3,
    icon: "/icons/support.png",
    title: "Customizable Templates",
    description: "Get ready made customizable templates for your projects.",
    scaleIcon: true,
  },
  {
    id: 4,
    icon: "/icons/support.png",
    title: "24/7 Support",
    description:
      "Get instant assistance anytime with our intelligent, always available assistant.",
    scaleIcon: true,
  },
  {
    id: 5,
    icon: "/icons/security.png",
    title: "Data Security & Compliance",
    description: "Safeguard your operations with industry-leading standards.",
    scaleIcon: false,
  },
  {
    id: 6,
    icon: "/icons/quality.png",
    title: "High-Quality Export",
    description:
      "High-quality export options allow users to download their content in formats",
    scaleIcon: false,
  },
];

const WhyChooseUs = () => {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsContainerRef = useRef(null);

  // Check if elements are in view
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  const isCardsInView = useInView(cardsContainerRef, {
    once: false,
    amount: 0.2,
  });

  // Parallax effect for the background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.4, 1, 0.4]
  );

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1,
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 12,
        delay: 0.3,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="w-full flex items-center z-50 mb-8 mt-20 justify-start text-center flex-col gap-[40px] relative overflow-hidden"
    >
      {/* Animated background element */}
      <motion.div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          y: backgroundY,
          opacity: backgroundOpacity,
        }}
      >
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#6B49FF] opacity-20 blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-[#49A3FF] opacity-15 blur-[130px]" />
      </motion.div>

      <div
        ref={titleRef}
        className="w-full flex items-center justify-start text-center flex-col"
      >
        <motion.h1
          className="bg-gradient-to-r text-[48px] font-medium leading-[71px] tracking-[-3.2%] from-[#989CA5] via-white to-[#989CA5] inline-block text-transparent bg-clip-text"
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          Why choose us
        </motion.h1>
        <motion.p
          className="text-[18px] font-normal leading-[25px] tracking-[-1.4%] text-[#BEBEBE]"
          variants={descriptionVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          Unlock the full potential of your business with exceptional features{" "}
          <br /> and unmatched performance.
        </motion.p>
      </div>

      <motion.div
        ref={cardsContainerRef}
        className="w-full h-auto lg:w-[1160px] p-2 lg:p-0 lg:h-[440px] z-30 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isCardsInView ? "visible" : "hidden"}
      >
        <motion.div
          style={{
            backdropFilter: "blur(16px)",
            boxShadow: "0px 16px 32px 0px #00000033",
            background:
              "linear-gradient(90deg, rgba(13, 11, 20, 0.6) 0%, rgba(11, 16, 20, 0.6) 100%)",
          }}
          className="w-full h-full z-30 rounded-[14px] border-[1px] border-white/20 p-[40px]"
          whileHover={{
            boxShadow: "0px 16px 36px 0px #00000055",
            borderColor: "rgba(255, 255, 255, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-[28px]">
            {cardData?.map((card, index) => (
              <Card
                key={card?.id}
                card={card}
                index={index}
                isInView={isCardsInView}
              />
            ))}
          </div>
        </motion.div>

        {/* Extra Blurry background */}
        <>
          <motion.span
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #6B49FF 0%, #6B49FF 100%)",
              filter: "blur(70px)",
            }}
            className="w-[349px] h-[98px] -z-10 absolute top-0 lg:top-[120px] left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [0.9, 1.05, 0.9],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.span>
          <motion.span
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #6B49FF 0%, #6B49FF 100%)",
              filter: "blur(90px)",
            }}
            className="w-[667px] h-[290px] -z-10 absolute top-0 lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          ></motion.span>
        </>
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseUs;

// borderTop: "3.4px solid",
// borderImageSource:
// "linear-gradient(90deg, #0D0F15 0%, #9A56FF 36.4%, #E5D3FF 50%, #9A56FF 63.9%, #0D0F15 100%)",
