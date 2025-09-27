import React from "react";
import Image from "next/image";
import ViewLimit from "./common/ViewLimit";

const HeroSection = () => {
  return (
    <section className=" mt-32 md:mt-20 pb-[5%]">
      <ViewLimit>
        <div className=" text-center space-y-5 px-5">
          <h3 className="text-sm md:text-lg font-medium">
            Construction - Renovation - Interior
          </h3>
          <h1 className="text-3xl md:text-5xl font-bold leading-normal md:leading-relaxed text-center">
            Buliding Dreams,
            <span className="bg-[url(/images/brick.webp)] bg-cover bg-center rounded-md px-1 ml-1 text-background">
              One Brick
            </span>{" "}
            <br /> At a Time
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="w-full h-[60vh] md:h-[75vh] relative">
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
