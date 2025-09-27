import React from "react";
import Image from "next/image";
import { BiSolidPhoneCall } from "react-icons/bi";
import { RiMenuFill } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";
import { IoCall } from "react-icons/io5";
import ViewLimit from "./ViewLimit";

const Topbar = () => {
  return (
    <header>
      <ViewLimit>
        <div className="h-20 flex justify-between gap-3 items-center px-5 md:px-10 pt-5 ">
          <Image
            src={"/images/primarylogo.webp"}
            width={70}
            height={70}
            alt="logo"
            priority
          />
          <div className=" hidden md:flex items-center gap-5 text-lg font-medium ">
            <div>About</div> <div>Services</div>
            <div className="bg-secondary hover:bg-primary rounded-full p-1 flex gap-2 items-center text-background w-fit cursor-pointer">
              {/* <div className="px-3 text-lg font-medium">Contact Now</div> */}
              <div className="w-7 h-7 rounded-full flex items-center justify-center bg-background text-xl text-foreground ">
                {/* <FiArrowUpRight /> */}
                <IoCall />
              </div>
            </div>
          </div>
        </div>
      </ViewLimit>
    </header>
  );
};

export default Topbar;
