"use client";
import React, { useRef } from "react";
import Image from "next/image";
import ViewLimit from "./common/ViewLimit";
import { ImLocation } from "react-icons/im";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const heroContainer = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      gsap.set(heroContainer, { opacity: 0 });

      tl.fromTo(
        ".hero-title",
        { y: 200, autoAlpha: 0 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }
      )
        .fromTo(
          ".hero-image",
          { y: 300, autoAlpha: 0 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .fromTo(
          ".hero-service",
          {
            autoAlpha: 0,
            x: -100,
          },
          { autoAlpha: 1, x: 0, duration: 1, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          ".location",
          {
            autoAlpha: 0,
            y: 50,
          },
          { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          ".location-mark",
          {
            autoAlpha: 0,
            y: -150,
          },
          { autoAlpha: 1, y: 0, duration: 1.5, ease: "power2.out" },
          "-=0.1"
        );
    },
    { scope: heroContainer }
  );

  return (
    <section className="mt-20 pb-[5%] hero-section" ref={heroContainer}>
      <ViewLimit>
        <div className=" text-center space-y-5 px-5">
          <h3 className="text-sm md:text-lg font-medium hero-service animate-in">
            Construction - Renovation - Interior
          </h3>
          <div className="flex gap-2 items-center justify-center ">
            <div className="animate-bounce text-secondary text-xl location-mark animate-in">
              <ImLocation />
            </div>
            <h3 className="text-lg font-medium location animate-in">Chennai</h3>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-normal md:leading-relaxed text-center hero-title animate-in">
            Buliding Dreams,
            <br className="md:hidden" />
            <span className="bg-[url(/images/brick.webp)] bg-cover bg-center rounded-md px-1 ml-1 text-background">
              One Brick
            </span>{" "}
            <br /> At a Time
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="w-full h-[60vh] md:h-[75vh] relative -top-7 md:top-2 hero-image animate-in">
            <Image
              src={"/images/herohome.webp"}
              fill
              alt="Herosection-Home"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </ViewLimit>
    </section>
  );
};

export default HeroSection;
