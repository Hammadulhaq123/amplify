"use client";

import React, { useState, useRef } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import FaqCard from "./faq/FaqCard";
import { motion, useInView } from "framer-motion";

// FAQ data in JSON format
const faqData = [
  {
    id: 1,
    question: "Can I use Animify for free?",
    answer:
      "Yes, Animify offers a free tier that gives you access to essential animation features, including basic transitions, limited templates, and up to 3 projects. Free users can export animations in standard resolution. For more advanced features, additional templates, and higher quality exports, check out our premium plans.",
    accentColor: "#A793FF",
    gradientColor: "#5EBCFF",
    hasDotsImage: true,
    direction: "left",
  },
  {
    id: 2,
    question: "Why should I upgrade to the Starter plan?",
    answer:
      "The Starter plan unlocks significantly more value with unlimited projects, 50+ premium templates, advanced animation effects, and higher resolution exports. You'll also get priority support, cloud storage for your projects, and the ability to remove watermarks. At just $9.99/month, it's perfect for designers and creators who need professional-quality animations regularly.",
    accentColor: "#A793FF",
    gradientColor: "#FF8A9E",
    hasDotsImage: false,
    direction: "right",
  },
  {
    id: 3,
    question: "How does workspace billing work?",
    answer:
      "Workspace billing is simple and transparent. You're billed monthly based on your selected plan, with the option to upgrade or downgrade at any time. Team workspaces are charged per seat, with discounts for annual commitments. All team members get full access to features included in your plan, and admins can easily manage seats and permissions from the dashboard.",
    accentColor: "#A793FF",
    gradientColor: "#A793FF",
    hasDotsImage: true,
    direction: "left",
  },
  {
    id: 4,
    question: "How do I cancel my subscription?",
    answer:
      "Canceling your subscription is hassle-free. Simply go to your Account Settings, select the 'Subscription' tab, and click 'Cancel Subscription'. You'll maintain access to premium features until the end of your current billing period. Your projects will remain accessible in read-only mode after cancellation, and you can download them anytime within 30 days.",
    accentColor: "#A793FF",
    gradientColor: "#8AFFBE",
    hasDotsImage: false,
    direction: "right",
  },
  {
    id: 5,
    question: "What is your refund policy?",
    answer:
      "We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied with Animify for any reason, contact our support team within 14 days of your initial purchase for a full refund. For annual subscriptions, we can provide prorated refunds after the first month. We review refund requests on a case-by-case basis to ensure fairness.",
    accentColor: "#A793FF",
    gradientColor: "#FFE08A",
    hasDotsImage: true,
    direction: "left",
  },
];

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const accordionContainerRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  const isAccordionContainerInView = useInView(accordionContainerRef, {
    once: false,
    amount: 0.15,
  });

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion((prev) => (prev === accordionId ? null : accordionId));
  };

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

  // Left and right variants for alternating animations
  const leftCardVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotate: -1,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const rightCardVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      rotate: 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      id="faqs"
      className="w-full flex items-center z-50 mb-6 mt-44 overflow-hiddenlg:overflow-visible justify-center text-center flex-col gap-[40px] relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        },
      }}
    >
      <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 opacity-20 w-full lg:w-[834px] h-[548px] rounded-full bg-radial from-[#A793FF] to-[#A793FF]/[0.0]  blur-[80px]" />{" "}
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 -z-20 pointer-events-none"
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute top-1/3 right-1/4 w-full lg:w-[400px] h-[400px] rounded-full bg-[#6B49FF] opacity-10 blur-[150px]" />
        <div className="absolute bottom-1/3 left-1/4 w-full lg:w-[300px] h-[300px] rounded-full bg-[#49A3FF] opacity-10 blur-[130px]" />
      </motion.div>
      <div className="w-full h-auto flex flex-col gap-8 justify-start items-center">
        <motion.h1
          ref={titleRef}
          className="bg-gradient-to-r text-[48px] z-30 font-medium leading-[71px] tracking-[-3.2%] from-[#989CA5] via-white to-[#989CA5] inline-block text-transparent bg-clip-text"
          variants={titleVariants}
          initial="hidden"
          animate={isTitleInView ? "visible" : "hidden"}
        >
          Frequently Asked Questions
        </motion.h1>

        <motion.div
          ref={accordionContainerRef}
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full lg:w-[748px] flex flex-col gap-4"
          initial="hidden"
          animate={isAccordionContainerInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={
                faq.direction === "left" ? leftCardVariants : rightCardVariants
              }
            >
              <FaqCard
                faq={faq}
                isOpen={openAccordion === faq.id}
                onClick={() => handleAccordionClick(faq.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Faq;
