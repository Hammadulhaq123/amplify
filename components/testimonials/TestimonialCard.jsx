"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const TestimonialCard = ({
  name = "John M.",
  position = "Operations Lead",
  testimonial = "This tool has completely transformed the way we work! It's intuitive, fast, and so easy to integrate with our current processes. Highly recommended!",
  image = "/path/to/profile.jpg",
  delay = 0,
}) => {
  // Animation variants for hover effect
  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  // Fallback for image if URL is invalid
  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.nextSibling.style.display = "flex";
  };

  return (
    <motion.div
      className="w-[480px] h-[183px] relative rounded-[14px] p-[0.8px] bg-gradient-to-b from-[#3F325F] to-[#3F325F]/[0.0] overflow-hidden flex justify-start items-center"
      // whileHover="hover"
      variants={cardVariants}
    >
      <img
        src="/extras/testimonial_lines.png"
        alt=""
        className="absolute top-0 left-0"
      />
      <div
        style={{
          background:
            "linear-gradient(180deg, #0F0C18 0%, #0D0A17 50%, #110828 100%)",
        }}
        className="w-full h-full rounded-[14px] px-7 flex items-center justify-start"
      >
        <div className="flex flex-col gap-5">
          {/* User info */}
          <div className="flex items-center gap-4">
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-[#2A2D3A] flex-shrink-0 relative">
              {image && (
                <>
                  <Image
                    src={image}
                    alt={name}
                    width={50}
                    height={50}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                  <div
                    className="w-full h-full bg-gradient-to-br from-[#101226] to-[#191E36] flex items-center justify-center text-white text-xl font-medium absolute inset-0"
                    style={{ display: "none" }}
                  >
                    {name.charAt(0)}
                  </div>
                </>
              )}
              {!image && (
                <div className="w-full h-full bg-gradient-to-br from-[#101226] to-[#191E36] flex items-center justify-center text-white text-xl font-medium">
                  {name.charAt(0)}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <h3 className="text-white text-lg font-semibold">{name}</h3>
              <p className="text-[#8E8E8E] text-sm">{position}</p>
            </div>
          </div>

          {/* Testimonial text */}
          <p className="text-[#BEBEBE] text-[16px] font-normal tracking-[-0.41%] break-words w-full text-wrap whitespace-normal ">
            {testimonial}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
