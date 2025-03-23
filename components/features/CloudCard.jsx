import Image from "next/image";
import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const CloudCard = () => {
  return (
    <div className="w-full  lg:w-[540px] h-[440px] p-[1px] bg-radial rounded-[12px] from-[#3B6BBF]  to-[#132B57]  ">
      <div className="w-full h-full rounded-[11px] bg-gradient-to-r from-[#08152B] via-[#10141A] to-[#0D1014]  relative overflow-hidden">
        <span className="w-[240px] h-[240px] rounded-full bg-[#006AFF]/[0.28]  absolute top-[12px] left-[47px]   blur-[80px]"></span>
        <span className="w-[240px] h-[240px] rounded-full bg-[#7050ff]/[0.28]  absolute top-[104px] left-[246px]   blur-[80px]"></span>
        <div className="w-auto flex flex-col justify-start items-start absolute bottom-[20px] left-[20px] gap-[16px]">
          <div className="w-auto flex flex-col justify-start items-start text-left  gap-[6px]">
            <h3 className="text-[18px] font-semibold leading-[100%] tracking-[-1.4%] bg-gradient-to-r  from-white  via-white to-[#989CA5] inline-block text-transparent bg-clip-text">
              Secure Cloud Storage
            </h3>
            <p className="text-[14px] font-normal leading-[1.3] tracking-[-1%] text-[#BEBEBE]">
              With cloud storage, users’ projects are automatically <br />{" "}
              saved, ensuring their data is never lost.
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
          src={"/extras/feature_cloud.png"}
          width={290}
          height={290}
          alt="feature1"
          className="absolute top-[25px] left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-[126px] z-30"
        />
      </div>
    </div>
  );
};

export default CloudCard;
