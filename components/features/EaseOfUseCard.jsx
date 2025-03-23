import Image from "next/image";
import React, { useRef } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { motion, useInView } from "framer-motion";

const EaseOfUseCard = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.3 });

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  // Animation variants for images
  const image1Variants = {
    hidden: { opacity: 0, rotate: -5, y: -20 },
    visible: {
      opacity: 1,
      rotate: 0,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const image2Variants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  const image3Variants = {
    hidden: { opacity: 0, x: -40, y: 40 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 0.7,
        duration: 0.8,
        type: "spring",
        stiffness: 70,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className="w-full lg:w-[600px] h-[400px] p-[1px] bg-radial rounded-[12px] from-[#3B6BBF] to-[#132B57]"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -5 }}
    >
      <div className="w-full h-full rounded-[11px] bg-gradient-to-r from-[#08152B] via-[#10141A] to-[#0D1014] relative overflow-hidden">
        <span className="w-[321px] h-[321px] rounded-full bg-[#006AFF]/[0.28] absolute top-[260px] left-[-41px] blur-[80px]"></span>
        <span className="w-[321px] h-[321px] rounded-full bg-[#7050ff]/[0.28] absolute top-[23px] left-[348px] blur-[80px]"></span>

        <motion.div
          className="w-auto flex flex-col justify-start items-start absolute top-[20px] left-[20px] gap-[16px]"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="w-auto flex flex-col justify-start items-start text-left gap-[6px]">
            <h3 className="text-[18px] font-semibold leading-[100%] tracking-[-1.4%] bg-gradient-to-r from-white via-white to-[#989CA5] inline-block text-transparent bg-clip-text">
              Easy-to-Use Interface
            </h3>
            <p className="text-[14px] font-normal leading-[1.3] tracking-[-1%] text-[#BEBEBE]">
              Users can quickly start using the platform without <br /> needing
              a steep learning curve.
            </p>
          </div>
          <motion.button
            className="outline-none flex justify-start items-center gap-2 text-[#5EBCFF]"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-[14px] font-semibold leading-[100%]">
              Try it now
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.6, 1],
              }}
            >
              <HiOutlineArrowLongRight />
            </motion.div>
          </motion.button>
        </motion.div>

        <motion.div
          variants={image1Variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Image
            src="/extras/feature_1.1.svg"
            alt="feature1"
            width={175.28}
            height={60.46}
            className="absolute hidden lg:block lg:top-[11px] left-0 lg:left-[407.26px] z-20"
          />
        </motion.div>

        <motion.div
          variants={image2Variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Image
            src="/extras/feature_1.2.svg"
            alt="feature1"
            width={250.53}
            height={482.01}
            className="absolute top-[220px] lg:top-[104px] left-0 lg:left-[375px] z-20"
          />
        </motion.div>

        <motion.div
          variants={image3Variants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Image
            src="/extras/feature_1.3.svg"
            alt="feature1"
            width={208.6}
            height={633}
            className="absolute top-[175px] right-0 lg:left-[251px] z-10"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EaseOfUseCard;
