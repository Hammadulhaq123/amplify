"use client";
import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  isPopular = false,
  delay = 0,
}) => {
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay,
      }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ y: -5 }}
      className="w-auto h-auto flex justify-start items-start"
    >
      <div
        className={`relative w-[360px] h-[435px] rounded-[8px] overflow-hidden pt-[3.4px] flex flex-col `}
        style={{
          background: isPopular
            ? "linear-gradient(90deg, #0D0F15 0%, #9A56FF 36.4%, #E5D3FF 50%, #9A56FF 63.9%, #0D0F15 100%)"
            : "linear-gradient(90deg, #192235 0%, #0059FF 30%, #6FADFF 50%, #0059FF 70%, #192235 100%)",
        }}
      >
        {isPopular ? (
          <span className="w-[240px] h-[240px] rounded-full bg-[#7050ff]/[0.28]  absolute -top-1/4 left-1/2 -translate-x-1/2    blur-[80px]"></span>
        ) : (
          <span className="w-[240px] h-[240px] rounded-full bg-[#006AFF]/[0.28]  absolute -top-1/4 left-1/2 -translate-x-1/2   blur-[80px]"></span>
        )}

        {isPopular ? (
          <span className="w-[268px] h-[179px] rounded-full bg-[#7050ff]/[0.16]  absolute bottom-0 right-0  blur-[80px]"></span>
        ) : (
          <span className="w-[268px] h-[179px] rounded-full bg-[#006AFF]/[0.16]  absolute bottom-0 right-0  blur-[80px]"></span>
        )}
        <div
          className="w-full h-full rounded-[8px] p-[24px] flex flex-col  gap-5"
          style={{
            background:
              "radial-gradient(43.69% 75.71% at 50% 44.52%, #10141A 0%, #0C121C 50%, #0A1017 100%)",
          }}
        >
          <div className="flex flex-col items-start gap-6">
            {/* Header */}
            <div className="flex flex-col items-start gap-[12px]">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-white text-[20px] font-medium leading-[100%] tracking-[-0.41%]">
                  {title}
                </h3>
                {isPopular && (
                  <button
                    className="outline-none w-[70px] h-[32px]  rounded-[200px] border-[0.8px] border-[#6B49FF]/[0.2] bg-radial from-[#181620] via-[#1E1930] to-[#332C4F] flex items-center justify-center text-[12px] font-medium leading-[100%] tracking-[-1%] cursor-pointer"
                    style={{
                      boxShadow: "0px -4px 12px 0px #6B49FF99 inset",
                    }}
                  >
                    Amazing
                  </button>
                )}
              </div>
              <div className="flex items-end gap-1">
                <span className="text-white text-[36px] leading-[100%] tracking-[-1.2%] font-medium">
                  {price}
                </span>
                <span className="text-[#8E8E8E] text-[20px] leading-[100%] tracking-[-1.2%] font-normal mb-1">
                  {period}
                </span>
              </div>
              <p className="text-[#BEBEBE] text-[14px]font-normal leading-[100%] tracking-[-0.41%] text-left mt-1">
                {description}
              </p>
            </div>

            {/* Button */}
            <button
              className={`w-full h-[40px] flex items-center justify-center rounded-[10px] bg-white text-black  text-[14px] leading-[100%] tracking-[-0.41%] font-semibold transition-all `}
            >
              <span>{buttonText}</span>
            </button>
          </div>

          {/* Feature list */}
          <div className="flex flex-col gap-[20px] mt-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1c1c26] flex items-center justify-center">
                  <img src="/icons/check.svg" alt="check_mark_icon" />
                </div>
                <span className="text-white/80 text-[14px] font-normal leading-[100%] tracking-[-0.41%]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
