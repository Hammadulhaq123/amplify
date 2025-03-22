"use client";

import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const FaqCard = ({ faq, isOpen, onClick }) => {
  // Content animation variants
  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      onClick={onClick}
      className="w-full h-auto flex items-start cursor-pointer overflow-hidden justify-start p-[1px] rounded-[12px] bg-radial from-[#687283]  transition-all duration-200 to-[#687283]/[0.5] relative"
    >
      {faq.hasDotsImage && (
        <img
          src="/extras/dots.png"
          alt=""
          className="absolute top-0 left-36 h-[72px] z-0 object-scale-down"
        />
      )}

      <span
        className={`w-[101px] h-[101px] rounded-full absolute top-0 right-0 bg-[#006AFF] blur-[120px] z-0`}
      ></span>

      <span className="w-full lg:w-[500px] absolute left-0 lg:left-[301px] blur-[120px] z-0 h-[130px] bg-[#006AFF]/[0.10] rounded-full"></span>

      {/* Additional colorful shadow spans */}
      <span className="w-[101px] h-[101px] bg-[#006AFF]/[0.32] rounded-full absolute top-0 right-0 blur-[120px] z-0"></span>
      <span className="w-full lg:w-[500px] absolute left-0 lg:left-[301px] blur-[120px] z-0 h-[130px] bg-radial from-[#5EBCFF] to-[#5EBCFF]/[0.0] rounded-full"></span>

      <div
        type="button"
        style={{
          background:
            "radial-gradient(43.69% 75.71% at 50% 44.52%, #10141A 0%, #0C1018 50%, #0A1017 100%)",
        }}
        className="flex flex-col min-h-[72px] items-start justify-between w-full justify-center py-4 px-[27px] rounded-[12px] font-medium rtl:text-right outline-none"
      >
        <button
          name="faq-question"
          className={`flex items-center justify-between w-full font-medium rtl:text-right outline-none gap-3`}
          style={{ color: isOpen ? faq.accentColor : "#e7e7e7" }}
        >
          <div className="w-auto flex justify-start items-center text-xs md:text-sm lg:text-xl text-left gap-2">
            <span className="font-normal z-10 text-[20px] leading-[100%] tracking-[-0.4%]">
              {faq.question}
            </span>
          </div>

          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <FiMinus className="text-2xl z-10" />
            ) : (
              <FiPlus className="text-2xl z-10" />
            )}
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={contentVariants}
              className="w-full overflow-hidden"
            >
              <div className="py-1 rounded-md mt-1">
                <p className="mb-2 text-xs lg:text-[14px] text-left leading-normal text-[#bebebe]">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FaqCard;
