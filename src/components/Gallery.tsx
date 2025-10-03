"use client";
import React from "react";
import ViewLimit from "./common/ViewLimit";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";

const Gallery = () => {
  // const images = [
  //   "/images/about/livingroom.webp",
  //   "/images/about/kitchen.webp",
  //   "/images/about/balcony.webp",
  //   "/images/about/bedroom.webp",
  //   "/images/about/garden.webp",
  //   "/images/about/bathroom.webp",
  // ];

  const images = [
    {
      image: "/images/about/livingroom.webp",
      title: "",
      classnames: "",
    },
    {
      image: "/images/about/livingroom.webp",
      title: "",
      classnames: "",
    },
    {
      image: "/images/about/livingroom.webp",
      title: "",
      classnames: "",
    },
    {
      image: "/images/about/livingroom.webp",
      title: "",
      classnames: "",
    },
    {
      image: "/images/about/livingroom.webp",
      title: "",
      classnames: "",
    },
    {
      image: "/images/about/livingroom.webp",
      title: "",
      classnames: "",
    },
  ];

  return (
    <section className="py-[10%] md:py-[5%] px-5 md:px-10">
      <ViewLimit>
        <div className=" flex justify-center ">
          <h2 className="md:text-lg bg-secondary  py-1 rounded-full px-4 w-fit text-background ">
            Gallery
          </h2>
        </div>
        <h3 className="text-2xl md:text-4xl text-center py-5">
          A preview of what we can bring to life
        </h3>
        <div className="pt-[10%] flex justify-center">
          <div className="md:hidden w-[80%] ">
            {/* <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className=""
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative w-full h-[450px] ">
                    <Image
                      src={src.image}
                      alt={`Slide ${idx + 1}`}
                      fill
                      className=" object-cover rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
          </div>

          <div className="md:grid grid-cols-3 gap-5 hidden w-full ">
            <div className=" mt-10 space-y-5">
              <div className="h-56 w-full rounded-lg bg-black"></div>
              <div className="h-72 w-full rounded-lg bg-black"></div>
              <div className="h-56 w-full rounded-lg bg-black"></div>
            </div>
            <div className="space-y-5">
              <div className="h-96 w-full rounded-lg bg-black"></div>
              <div className="h-56 w-full rounded-lg bg-black"></div>
              <div className="h-72 w-full rounded-lg bg-black"></div>
            </div>
            <div className="mt-10 space-y-5">
              <div className="h-96 w-full rounded-lg bg-black"></div>
              <div className="h-72 w-full rounded-lg bg-black"></div>
              <div className="h-40 w-full rounded-lg bg-black"></div>
            </div>
          </div>
        </div>
      </ViewLimit>
    </section>
  );
};

export default Gallery;
