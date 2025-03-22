import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center relative">
      <Image
        width={909}
        height={472}
        src="/extras/radial_navbar.png"
        alt=""
        className="absolute top-0 left-1/2  z-10 -translate-x-1/2"
      />
      <img
        src="/extras/grid.png"
        alt=""
        className="absolute top-0 left-1/2 z-10 -translate-x-1/2"
      />
      <div className="h-[63px] w-full lg:w-[688px] z-20 flex items-center px-[32px] justify-between rounded-full border-[0.8px] border-white/[0.12] my-[32px] bg-gradient-to-r from-[#171D2D] to-[#040B1D]">
        <Link href={"/"}>
          <Image src={"/logo.png"} width={60} height={23.08} alt="Logo" />
        </Link>

        <div className="w-auto flex justify-center items-center gap-[32px]">
          <Link
            href={"/"}
            className="text-[14px] font-medium leading-[100%] tracking-normal cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="text-[14px] font-medium leading-[100%] tracking-normal cursor-pointer"
          >
            Template
          </Link>
          <Link
            href={"/"}
            className="text-[14px] font-medium leading-[100%] tracking-normal cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            href={"/"}
            className="text-[14px] font-medium leading-[100%] tracking-normal cursor-pointer"
          >
            About
          </Link>
        </div>
        <button
          className="outline-none w-[88px] h-[35px] rounded-[10px] border-[0.6px] border-[#E0F2FF]/[0.4] bg-[#03263D] flex items-center justify-center text-[14px] font-medium leading-[100%] tracking-normal cursor-pointer"
          style={{
            boxShadow: "0px 0px 10px 0px #0099FF inset",
          }}
        >
          Try it now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
