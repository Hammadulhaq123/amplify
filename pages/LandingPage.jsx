import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";
import Plans from "@/components/Plans";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const LandingPage = () => {
  return (
    <div className="w-full h-auto flex flex-col overflow-x-hidden justify-start items-start bg-[#010101] text-white">
      <Hero />
      <Clients />
      <Features />
      <WhyChooseUs />
      <Plans />
      <Faq />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
