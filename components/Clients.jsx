"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Clients = () => {
  const data = [
    {
      src: "/clients/1.svg",
      alt: "client1",
    },
    {
      src: "/clients/2.svg",
      alt: "client2",
    },
    {
      src: "/clients/3.svg",
      alt: "client3",
    },
    {
      src: "/clients/4.svg",
      alt: "client4",
    },
    {
      src: "/clients/5.svg",
      alt: "client5",
    },
    {
      src: "/clients/6.svg",
      alt: "client6",
    },
  ];

  // For debugging - log which files are being loaded
  console.log(
    "Client logos to load:",
    data.map((item) => item.src)
  );

  // Duplicate the data to create a seamless loop
  const duplicatedData = [...data, ...data];

  return (
    <div className="w-full flex items-center z-30 my-16 justify-start text-center flex-col gap-[28px] overflow-hidden">
      <h3 className="text-[20px] font-medium leading-[24px] tracking-[-1.4%] text-[#BEBEBE]">
        Our Clients
      </h3>
      <div className="w-full lg:w-[1100px] h-[60px] flex items-center justify-center relative">
        <span
          className="w-[280px] h-full absolute -left-[100px] rotate-0 top-0 z-10"
          style={{
            background:
              "linear-gradient(90deg, #010101 0%, rgba(1, 1, 1, 0) 100%)",
          }}
        ></span>

        <div className="flex overflow-hidden relative w-full h-full">
          <motion.div
            className="flex items-center gap-2 md:gap-6 lg:gap-[100px] absolute whitespace-nowrap h-full"
            animate={{
              x: [0, -50 * data.length * 2],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedData.map((item, index) => (
              <motion.div
                key={index}
                className="h-full flex items-center justify-center w-[120px]"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {/* Using Next.js Image with fixed width and height for better control */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={120}
                  height={44}
                  style={{ objectFit: "scale-down" }}
                  onError={(e) => {
                    console.error(`Error loading image: ${item.src}`);
                    e.target.src = "https://placehold.co/120x40/png?text=Logo";
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <span
          className="w-[280px] h-full absolute -right-[100px] rotate-180 top-0 z-10"
          style={{
            background:
              "linear-gradient(90deg, #010101 0%, rgba(1, 1, 1, 0) 100%)",
          }}
        ></span>
      </div>

      {/* Fallback message if images don't load */}
      <div className="hidden debug-info">
        If you're seeing this and not the logos, please check that your SVG
        files exist in the public/clients/ directory and are properly named
        (1.svg, 2.svg, etc.)
      </div>
    </div>
  );
};

export default Clients;
