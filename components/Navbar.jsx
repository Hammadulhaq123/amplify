import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const controls = useAnimation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Start the animation when the component mounts
    controls.start("visible");
  }, [controls]);

  const navbarVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.6,
      },
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <Image
        width={909}
        height={472}
        src="/extras/radial_navbar.png"
        alt=""
        className="absolute top-0 left-1/2 z-10 -translate-x-1/2"
      />
      <img
        src="/extras/grid.png"
        alt=""
        className="absolute top-0 left-1/2 z-10 -translate-x-1/2"
      />

      <motion.div
        className="h-[63px] w-[95%] md:w-[90%] lg:w-[688px] z-20 flex items-center px-[16px] md:px-[32px] justify-between rounded-full border-[0.8px] border-white/[0.12] my-[32px] bg-gradient-to-r from-[#171D2D] to-[#040B1D]"
        initial="hidden"
        animate={controls}
        variants={navbarVariants}
      >
        <Link href={"/"}>
          <Image src={"/logo.png"} width={60} height={23.08} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-auto justify-center items-center gap-[32px]">
          <Link
            href={"/"}
            className="text-[14px] font-medium leading-[100%] tracking-normal cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="text-[14px] font-medium leading-[100%] tracking-normal cursor-pointer"
          >
            Template
          </Link>
          <Link
            href={"/"}
            className="text-[14px] font-medium leading-[100%] tracking-normal cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            href={"/"}
            className="text-[14px] font-medium leading-[100%] tracking-normal cursor-pointer"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            className="outline-none w-[88px] h-[35px] rounded-[10px] border-[0.6px] border-[#E0F2FF]/[0.4] bg-[#03263D] flex items-center justify-center text-[14px] font-medium leading-[100%] tracking-normal cursor-pointer"
            style={{
              boxShadow: "0px 0px 10px 0px #0099FF inset",
            }}
          >
            Try it now
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Button */}
        <button
          className="hidden md:flex outline-none w-[88px] h-[35px] rounded-[10px] border-[0.6px] border-[#E0F2FF]/[0.4] bg-[#03263D] items-center justify-center text-[14px] font-medium leading-[100%] tracking-normal cursor-pointer"
          style={{
            boxShadow: "0px 0px 10px 0px #0099FF inset",
          }}
        >
          Try it now
        </button>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className="w-[95%] md:hidden z-20 mx-auto rounded-xl overflow-hidden border-[0.8px] border-white/[0.12] bg-gradient-to-r from-[#171D2D] to-[#040B1D] -mt-6"
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
      >
        <div className="flex flex-col p-4 space-y-3">
          <Link
            href={"/"}
            className="text-[14px] font-medium py-2 leading-[100%] tracking-normal cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="text-[14px] font-medium py-2 leading-[100%] tracking-normal cursor-pointer"
          >
            Template
          </Link>
          <Link
            href={"/"}
            className="text-[14px] font-medium py-2 leading-[100%] tracking-normal cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            href={"/"}
            className="text-[14px] font-medium py-2 leading-[100%] tracking-normal cursor-pointer"
          >
            About
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
