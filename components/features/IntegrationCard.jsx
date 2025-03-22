import Image from "next/image";
import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const IntegrationCard = () => {
  return (
    <div className="w-[540px] h-[440px] p-[1px] bg-radial rounded-[12px] from-[#3B6BBF]  to-[#132B57]  ">
      <div className="w-full h-full rounded-[11px] bg-gradient-to-r from-[#08152B] via-[#10141A] to-[#0D1014]  overflow-hidden relative">
        <span className="w-[240px] h-[240px] rounded-full bg-[#006AFF]/[0.28]  absolute top-[12px] left-[47px]   blur-[80px]"></span>
        <span className="w-[240px] h-[240px] rounded-full bg-[#7050ff]/[0.28]  absolute top-[104px] left-[246px]   blur-[80px]"></span>
        <div className="w-auto flex flex-col justify-start items-start absolute bottom-[20px] left-[20px] gap-[16px]">
          <div className="w-auto flex flex-col justify-start items-start text-left  gap-[6px]">
            <h3 className="text-[18px] font-semibold leading-[100%] tracking-[-1.4%] bg-gradient-to-r  from-white  via-white to-[#989CA5] inline-block text-transparent bg-clip-text">
              Wide Integration Support
            </h3>
            <p className="text-[14px] font-normal leading-[1.3] tracking-[-1%] text-[#BEBEBE]">
              The ability to integrate with third-party apps (e.g., Google
              Drive, <br /> Dropbox, Slack) is essential for users who rely on a
              suite of tools.
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
          src={"/extras/feature_icons.png"}
          width={400}
          height={101}
          alt="feature1"
          className="absolute top-[150px] left-[70px] z-30"
        />
      </div>
    </div>
  );
};

export default IntegrationCard;
