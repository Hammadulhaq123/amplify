import Image from "next/image";
import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const CollaborationCard = () => {
  return (
    <div className="w-full  lg:w-[480px] h-[400px] p-[1px] bg-radial rounded-[12px] from-[#3B6BBF]  to-[#132B57]  ">
      <div className="w-full h-full rounded-[11px] bg-gradient-to-r from-[#08152B] via-[#10141A] to-[#0D1014] relative overflow-hidden ">
        <div className="w-auto flex flex-col justify-start items-start absolute top-[20px] left-[20px] gap-[16px]">
          <div className="w-auto flex flex-col justify-start items-start text-left  gap-[6px]">
            <h3 className="text-[18px] font-semibold leading-[100%] tracking-[-1.4%] bg-gradient-to-r  from-white  via-white to-[#989CA5] inline-block text-transparent bg-clip-text">
              Collaboration Tools
            </h3>
            <p className="text-[14px] font-normal leading-[1.3] tracking-[-1%] text-[#BEBEBE]">
              Explanation: If your product enables collaboration, <br />{" "}
              emphasize the ability for teams to work together in real time.
            </p>
          </div>
          <button className="outline-none flex justify-start items-center gap-2 text-[#5EBCFF]">
            <span className="text-[14px] font-semibold leading-[100%]">
              Try it now
            </span>
            <HiOutlineArrowLongRight />
          </button>
        </div>
        <span className="w-[321px] h-[321px] rounded-full bg-[#7050FF]/[0.28]  absolute top-[-243px] left-[73px]   blur-[80px]"></span>
        <span className="w-[321px] h-[321px] rounded-full bg-[#7050ff]  absolute top-[351px] left-[73px]   blur-[80px]"></span>

        {/* images of users */}
        <Image
          src={"/users/users.svg"}
          width={397}
          height={198}
          alt="user_dummy"
          className="absolute top-[158px] left-[42px] z-20"
        />
        <Image
          src={"/users/dotted_bg.svg"}
          width={510}
          height={510}
          alt="user_dummy"
          className="absolute top-[55px] left-[-15px] z-0"
        />

        <button className="outline-none w-[113px] h-[47px] z-30 rounded-full  bg-gradient-to-r from-[#12131A] via-[#191D32] to-[#272E4D] flex items-center justify-center text-[14px] font-normal leading-[100%] tracking-[-0.41%] cursor-pointer absolute top-[312px] left-[184px]">
          <Image
            src={"/users/collaboration_btn.svg"}
            width={113}
            height={47}
            alt="btn"
          />
        </button>
      </div>
    </div>
  );
};

export default CollaborationCard;
