import Image from "next/image";
import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const EaseOfUseCard = () => {
  return (
    <div className="w-full  lg:w-[600px] h-[400px] p-[1px] bg-radial rounded-[12px] from-[#3B6BBF]  to-[#132B57]  ">
      <div className="w-full h-full rounded-[11px] bg-gradient-to-r from-[#08152B] via-[#10141A] to-[#0D1014]  relative overflow-hidden">
        <span className="w-[321px] h-[321px] rounded-full bg-[#006AFF]/[0.28]  absolute top-[260px] left-[-41px]   blur-[80px]"></span>
        <span className="w-[321px] h-[321px] rounded-full bg-[#7050ff]/[0.28]  absolute top-[23px] left-[348px]   blur-[80px]"></span>

        <div className="w-auto flex flex-col justify-start items-start absolute top-[20px] left-[20px] gap-[16px]">
          <div className="w-auto flex flex-col justify-start items-start text-left  gap-[6px]">
            <h3 className="text-[18px] font-semibold leading-[100%] tracking-[-1.4%] bg-gradient-to-r  from-white  via-white to-[#989CA5] inline-block text-transparent bg-clip-text">
              Easy-to-Use Interface
            </h3>
            <p className="text-[14px] font-normal leading-[1.3] tracking-[-1%] text-[#BEBEBE]">
              Users can quickly start using the platform without <br /> needing
              a steep learning curve.
            </p>
          </div>
          <button className="outline-none flex justify-start items-center gap-2 text-[#5EBCFF]">
            <span className="text-[14px] font-semibold leading-[100%]">
              Try it now
            </span>
            <HiOutlineArrowLongRight />
          </button>
        </div>

        <Image
          src="/extras/feature_1.1.svg"
          alt="feature1"
          width={175.28}
          height={60.46}
          className="absolute top-[11px] left-[407.26px] z-20"
        />

        <Image
          src="/extras/feature_1.2.svg"
          alt="feature1"
          width={250.53}
          height={482.01}
          className="absolute top-[104px] left-[375px] z-20"
        />
        <Image
          src="/extras/feature_1.3.svg"
          alt="feature1"
          width={208.6}
          height={633}
          className="absolute top-[175px] left-[251px] z-10"
        />
      </div>
    </div>
  );
};

export default EaseOfUseCard;
