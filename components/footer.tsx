import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full h-40 bg-[#EDEDED] flex flex-col items-center gap-3 pt-10">
      <div>
        <h4>
          <span>© Copyright 2025 | </span>
          <Link href="#" className="text-[#e09a0e]">
            Kalium Theme
          </Link>
          <span>by</span>
          <Link href="#" className="text-[#e09a0e]">
            Laborator
          </Link>
        </h4>
      </div>
      <div className="flex space-x-3">
        <Link
          href="#"
          className="text-[#e09a0e] hover:text-blue-950 transition-all group"
        >
          Facebook
          <div className="bg-[#c08c23] h-[1px] w-0 group-hover:w-full transition-all duration-300"></div>
        </Link>{" "}
        <Link
          href="#"
          className="text-[#e09a0e] hover:text-blue-950 transition-all group"
        >
          Twitter X
          <div className="bg-[#c08c23] h-[1px] w-0 group-hover:w-full transition-all duration-300"></div>
        </Link>{" "}
        <Link
          href="#"
          className="text-[#e09a0e] hover:text-blue-950 transition-all group"
        >
          Instagram
          <div className="bg-[#c08c23] h-[1px] w-0 group-hover:w-full transition-all duration-300"></div>
        </Link>{" "}
        <Link
          href="#"
          className="text-[#e09a0e] hover:text-blue-950 transition-all group"
        >
          Dribbble
          <div className="bg-[#c08c23] h-[1px] w-0 group-hover:w-full transition-all duration-300"></div>
        </Link>{" "}
        <Link
          href="#"
          className="text-[#e09a0e] hover:text-blue-950 transition-all group"
        >
          YouTube
          <div className="bg-[#c08c23] h-[1px] w-0 group-hover:w-full transition-all duration-300"></div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
