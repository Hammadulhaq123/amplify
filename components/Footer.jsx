"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const sectionRef = useRef(null);
  const footerContentRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const isFooterInView = useInView(footerContentRef, {
    once: false,
    amount: 0.2,
  });

  // Animation variants for button container and buttons
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

  const footerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.05,
      },
    }),
  };

  return (
    <div
      ref={sectionRef}
      className="w-full flex items-center z-50 mb-0 mt-20 justify-start text-center flex-col gap-20 relative overflow-hidden"
    >
      <div className="w-auto flex flex-col justify-center items-center gap-0">
        <h1 className="bg-gradient-to-r text-[48px] z-30 font-medium leading-[71px] tracking-[-3.2%] from-[#989CA5] via-white to-[#989CA5] inline-block text-transparent bg-clip-text">
          Get Started
        </h1>
        <p className="text-[18px] font-normal leading-[25px] tracking-[-1.4%] text-[#BEBEBE]">
          Holds no opinions on what's and how's. Build whatever <br /> makes
          sense to you.
        </p>
        <motion.div
          className="w-auto flex items-center justify-center gap-[12px] mt-6"
          variants={buttonContainerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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

      <div className="w-full flex flex-col items-center justify-start">
        <div
          className="w-full h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, #192235 0%, #0059FF 40%, #6FADFF 50%, #0059FF 60%, #192235 100%)",
          }}
        ></div>

        <div
          ref={footerContentRef}
          className="w-full py-16 px-8 md:px-16 lg:px-24"
          style={{
            background: "linear-gradient(180deg, #0B0E15 0%, #010101 100%)",
          }}
        >
          <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4  gap-12">
            <motion.div
              className="flex flex-col items-start text-left space-y-6"
              initial="hidden"
              animate={isFooterInView ? "visible" : "hidden"}
              custom={0}
              variants={footerItemVariants}
            >
              <Link href="/" className="flex items-center space-x-2">
                <img src="/footer_logo.png" alt="logo" />
              </Link>

              <motion.div
                className="text-[#bebebe] text-[14px] font-medium leading-[101%] tracking-[0.41%] space-y-2"
                custom={1}
                variants={footerItemVariants}
              >
                <p>1234 Innovation Blvd, Suite 567</p>
                <p>Tech City, TC 98765, United States.</p>
              </motion.div>

              <motion.div
                className="text-[#bebebe] text-[14px] font-medium leading-[101%] tracking-[0.41%]"
                custom={2}
                variants={footerItemVariants}
              >
                <p>(555) 123-4567</p>
              </motion.div>

              <motion.a
                href="mailto:contact@animify.com"
                className="text-[#bebebe] text-[14px] font-medium leading-[101%] tracking-[0.41%] hover:text-blue-400 transition-colors"
                custom={3}
                variants={footerItemVariants}
              >
                contact@animify.com
              </motion.a>
            </motion.div>
            <div className=""></div>
            <>
              <div className="grid grid-cols-2   text-left">
                <div className="space-y-6">
                  <motion.h3
                    className="text-white text-[20px] font-semibold leading-[100%] tracking-[0%] "
                    initial="hidden"
                    animate={isFooterInView ? "visible" : "hidden"}
                    custom={4}
                    variants={footerItemVariants}
                  >
                    Home
                  </motion.h3>
                  <div className="space-y-4">
                    {["About", "Blog", "Contact", "404"].map((item, index) => (
                      <motion.div
                        key={item}
                        initial="hidden"
                        animate={isFooterInView ? "visible" : "hidden"}
                        custom={index + 5}
                        variants={footerItemVariants}
                      >
                        <Link
                          href={`/`}
                          className="text-[#fff] text-[14px] font-medium leading-[100%] tracking-[0%] hover:text-white transition-colors"
                        >
                          {item}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <motion.h3
                    className="text-white text-[20px] font-semibold leading-[100%] tracking-[0%] "
                    initial="hidden"
                    animate={isFooterInView ? "visible" : "hidden"}
                    custom={9}
                    variants={footerItemVariants}
                  >
                    Other Pages
                  </motion.h3>
                  <div className="space-y-4">
                    {[
                      "Log In",
                      "Forgot Password",
                      "Terms & Services",
                      "Privacy Policy",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial="hidden"
                        animate={isFooterInView ? "visible" : "hidden"}
                        custom={index + 10}
                        variants={footerItemVariants}
                      >
                        <Link
                          href={`/`}
                          className="text-[#fff] text-[14px] font-medium leading-[100%] tracking-[0%] hover:text-white transition-colors"
                        >
                          {item}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social links column */}
              <div className="space-y-6 text-left">
                <motion.h3
                  className="text-white text-[20px] font-semibold leading-[100%] tracking-[0%] "
                  initial="hidden"
                  animate={isFooterInView ? "visible" : "hidden"}
                  custom={14}
                  variants={footerItemVariants}
                >
                  My Work
                </motion.h3>
                <div className="space-y-4">
                  {["Dribbble", "Upwork", "Awwwwards", "X"].map(
                    (item, index) => (
                      <motion.div
                        key={item}
                        initial="hidden"
                        animate={isFooterInView ? "visible" : "hidden"}
                        custom={index + 15}
                        variants={footerItemVariants}
                      >
                        <Link
                          href={`/`}
                          className="text-[#fff] text-[14px] font-medium leading-[100%] tracking-[0%] hover:text-white transition-colors"
                        >
                          {item}
                        </Link>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
