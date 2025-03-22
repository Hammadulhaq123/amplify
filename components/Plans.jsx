import Image from "next/image";
import React from "react";

const Plans = () => {
  return (
    <div className="w-full flex items-center z-50 mb-6 mt-44 justify-center text-center flex-col gap-[40px]">
      <div className="w-[371px]  h-[100px] flex items-center  justify-center text-center flex-col relative ">
        <h1 className="bg-gradient-to-r text-[48px] z-30 h- font-medium leading-[71px] tracking-[-3.2%] from-[#989CA5]  via-white to-[#989CA5] inline-block text-transparent bg-clip-text">
          Explore all plans
        </h1>
        <span
          style={{
            background:
              "radial-gradient(32.8% 141.01% at 50% 50%, rgba(144, 119, 255, 0.8) 0%, rgba(107, 73, 255, 0.7) 12.28%, rgba(107, 73, 255, 0.6) 100%)",
          }}
          className="w-[371px] h-[89px] opacity-60 blur-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></span>
        <Image
          src={"/extras/plans_lines.png"}
          alt="extra_lines"
          width={533}
          height={525.7}
          className="absolute -top-7"
        />
      </div>

      {/* <div className="w-[371px] h-[89px] bg-red-500"></div> */}
    </div>
  );
};

export default Plans;
