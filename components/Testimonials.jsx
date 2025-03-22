"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TestimonialCard from "./testimonials/TestimonialCard";

const Testimonials = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });

  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.2 });

  // Sample testimonial data - first row
  const testimonials1 = [
    {
      name: "John M.",
      position: "Operations Lead",
      testimonial:
        "This tool has completely transformed the way we work! It's intuitive, fast, and so easy to integrate with our current processes. Highly recommended!",
      image: "/users/user_c.svg",
    },
    {
      name: "Sarah L.",
      position: "Creative Director",
      testimonial:
        "The animation capabilities are extraordinary. We've been able to create professional-grade content in half the time it used to take us.",
      image: "/users/user_cl.svg",
    },
    {
      name: "Michael K.",
      position: "Product Manager",
      testimonial:
        "Our team's productivity has increased by 40% since we started using this platform. The learning curve is minimal and the results are impressive.",
      image: "/users/user_cl2.svg",
    },
  ];

  // Sample testimonial data - second row
  const testimonials2 = [
    {
      name: "Emma R.",
      position: "UI/UX Designer",
      testimonial:
        "The animations are top-notch and the interface is so clean. I've recommended it to all my design colleagues for their projects!",
      image: "/users/user_cl3.svg",
    },
    {
      name: "David T.",
      position: "Frontend Developer",
      testimonial:
        "As a developer, I appreciate how well-structured and performant the animations are. It's made our website feel so much more professional.",
      image: "/users/user_cl4.svg",
    },
    {
      name: "Jessica P.",
      position: "Marketing Director",
      testimonial:
        "Our conversion rates have improved by 25% since implementing these animations on our landing pages. The ROI speaks for itself!",
      image: "/users/user_cl5.svg",
    },
  ];

  // Duplicate the data to create a seamless loop
  const duplicatedTestimonials1 = [...testimonials1, ...testimonials1];
  const duplicatedTestimonials2 = [...testimonials2, ...testimonials2];

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

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 lg:py-68 overflow-hidden relative"
    >
      <div className="text-center ">
        <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-0 ">
          <img src="/extras/heart.svg" alt="heart_bg" />
        </div>
      </div>

      <div className=" w-auto h-40 absolute top-36 left-1/2 -translate-x-1/2 z-10">
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
            Our Customers
          </motion.h1>
          <motion.p
            className="text-[18px] font-normal leading-[25px] tracking-[-1.4%] text-[#BEBEBE]"
            variants={descriptionVariants}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
          >
            What people say about us
          </motion.p>
        </div>
      </div>

      {/* First row - left to right */}
      <div className="w-full overflow-hidden mb-8">
        <div className="relative w-full">
          <span
            className="w-[280px] h-full absolute left-0 top-0 z-10"
            style={{
              background:
                "linear-gradient(90deg, #010101 0%, rgba(1, 1, 1, 0) 100%)",
            }}
          ></span>

          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials1.map((testimonial, index) => (
              <div key={index} className="inline-block">
                <TestimonialCard
                  name={testimonial.name}
                  position={testimonial.position}
                  testimonial={testimonial.testimonial}
                  image={testimonial.image}
                />
              </div>
            ))}
          </motion.div>

          <span
            className="w-[280px] h-full absolute right-0 top-0 z-10"
            style={{
              background:
                "linear-gradient(270deg, #010101 0%, rgba(1, 1, 1, 0) 100%)",
            }}
          ></span>
        </div>
      </div>

      {/* Second row - right to left */}
      <div className="w-full overflow-hidden">
        <div className="relative w-full">
          <span
            className="w-[280px] h-full absolute left-0 top-0 z-10"
            style={{
              background:
                "linear-gradient(90deg, #010101 0%, rgba(1, 1, 1, 0) 100%)",
            }}
          ></span>

          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials2.map((testimonial, index) => (
              <div key={index} className="inline-block">
                <TestimonialCard
                  name={testimonial.name}
                  position={testimonial.position}
                  testimonial={testimonial.testimonial}
                  image={testimonial.image}
                />
              </div>
            ))}
          </motion.div>

          <span
            className="w-[280px] h-full absolute right-0 top-0 z-10"
            style={{
              background:
                "linear-gradient(270deg, #010101 0%, rgba(1, 1, 1, 0) 100%)",
            }}
          ></span>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-[#0099FF]/10 rounded-full filter blur-[120px] -z-10" />
      <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-[#6B49FF]/10 rounded-full filter blur-[120px] -z-10" />
    </section>
  );
};

export default Testimonials;
