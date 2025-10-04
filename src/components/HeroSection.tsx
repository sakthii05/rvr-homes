import React from "react";
import Image from "next/image";
import ViewLimit from "./common/ViewLimit";
import { ImLocation } from "react-icons/im";

const HeroSection = () => {
  return (
    <section className="mt-20 pb-[5%]">
      <ViewLimit>
        <div className=" text-center space-y-5 px-5">
          <h3 className="text-sm md:text-lg font-medium">
            Construction - Renovation - Interior
          </h3>
          <div className="flex gap-2 items-center justify-center">
            <div className="animate-bounce text-secondary text-xl">
              <ImLocation />
            </div>
            <h3 className="text-lg font-medium">Chennai</h3>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-normal md:leading-relaxed text-center">
            Buliding Dreams,<br className="md:hidden"/>
            <span className="bg-[url(/images/brick.webp)] bg-cover bg-center rounded-md px-1 ml-1 text-background">
              One Brick
            </span>{" "}
            <br /> At a Time
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="w-full h-[60vh] md:h-[75vh] relative -top-7 md:top-2">
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
