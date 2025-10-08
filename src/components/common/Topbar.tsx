"use client";
import React from "react";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import ViewLimit from "./ViewLimit";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Topbar = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".logo",
      { y: -200,  autoAlpha: 0 },
      {
         autoAlpha: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      "-=0.1"
    ).fromTo(
      ".menu",
      { x: 200,  autoAlpha: 0 },
      {
         autoAlpha: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      },
      "-=0.1"
    );
  }, {});

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
            className="logo animate-in"
          />
          <div className="flex items-center gap-5 text-lg font-medium menu animate-in">
            <Link href="/#aboutus" target="_self" className="hidden md:block">
              About
            </Link>
            <Link href="/#services" target="_self" className="hidden md:block">
              Services
            </Link>

            <Link
              href="https://wa.me/919150346622"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-sm md:text-lg bg-secondary py-2 rounded-full px-4 w-fit text-background flex items-center gap-3"
            >
              <IoCall /> Contact Us
            </Link>
          </div>
        </div>
      </ViewLimit>
    </header>
  );
};

export default Topbar;
