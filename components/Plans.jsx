import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import PricingCard from "./plans/PricingCard";

const Plans = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$0",
      period: "/monthly",
      description: "Perfect for custom animation and motion graphics.",
      buttonText: "Sign Up with Enterprise",
      features: [
        "Unlimited files",
        "Unlimited editors",
        "Export video, GIF, Lottie",
        "720p, 30fps",
        "Import from Figma",
      ],
      isPopular: false,
      delay: 0,
    },
    {
      title: "Professional",
      price: "$19",
      period: "/monthly",
      description: "Advanced features for professional creators.",
      buttonText: "Get Started",
      features: [
        "Everything in Starter",
        "4K, 60fps exports",
        "Advanced motion effects",
        "Custom branding",
        "Priority support",
      ],
      isPopular: true,
      delay: 0.1,
    },
    {
      title: "Enterprise",
      price: "$49",
      period: "/monthly",
      description: "For teams and large-scale projects.",
      buttonText: "Contact Sales",
      features: [
        "Everything in Professional",
        "Team collaboration",
        "Asset libraries",
        "Workflow management",
        "Dedicated account manager",
      ],
      isPopular: false,
      delay: 0.2,
    },
  ];

  return (
    <div className="w-full flex items-center z-50 py-20 mt-8 justify-center text-center flex-col gap-[40px]">
      <div className="w-[371px] h-[100px] flex items-center justify-center text-center flex-col relative">
        <h1 className="bg-gradient-to-r text-[48px] z-30 font-medium leading-[71px] tracking-[-3.2%] from-[#989CA5] via-white to-[#989CA5] inline-block text-transparent bg-clip-text">
          Explore all plans
        </h1>
        <span className="w-[371px] h-[89px] bg-radial  from-[#9077FF]/[0.8] via-[#6B49FF]/[0.7] to-[#6B49FF]/[0.6] blur-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        <Image
          src={"/extras/plans_lines.png"}
          alt="extra_lines"
          width={533}
          height={525.7}
          className="absolute -top-7"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-2 lg:p-0 mt-4 z-10">
        {pricingPlans?.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            period={plan.period}
            description={plan.description}
            features={plan.features}
            buttonText={plan.buttonText}
            isPopular={plan.isPopular}
            delay={plan.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default Plans;
