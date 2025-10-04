"use client";
import React from "react";
import ViewLimit from "./common/ViewLimit";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Gallery = () => {
  const images = [
    {
      image: "/images/gallery/dining-room.webp",
      title: "Dining Room",
      classnames: "h-[450px]",
    },
    {
      image: "/images/gallery/kitchen.webp",
      title: "Kitchen",
      classnames: "h-96",
    },
    {
      image: "/images/gallery/children-room.webp",
      title: "Children's Room",
      classnames: "h-96",
    },
    {
      image: "/images/gallery/livingroom.webp",
      title: "Living Room",
      classnames: "h-[450px]",
    },
    {
      image: "/images/gallery/bedroom.webp",
      title: "Bed Room",
      classnames: "h-96",
    },

    {
      image: "/images/gallery/ceiling.webp",
      title: "Ceiling",
      classnames: "h-[500px]",
    },
    {
      image: "/images/gallery/balcony.webp",
      title: "Balcony",
      classnames: "h-[420px]",
    },

    {
      image: "/images/gallery/workspace.webp",
      title: "Workspace",
      classnames: "h-96",
    },
    {
      image: "/images/gallery/bathroom.webp",
      title: "Bathroom",
      classnames: "h-96",
    },
  ];

  const Imagecard = (props: {
    card: { image: string; title: string; classnames: string };
  }) => {
    const { card } = props;
    return (
      <div
        className={`${card.classnames} w-full rounded-xl relative overflow-hidden`}
      >
        <div className=" absolute inset-0 bg-black/5 z-10 text-background flex items-end">
          <div className="p-5 text-xl font-semibold">{card.title}</div>
        </div>
        <Image
          src={card.image}
          alt={card.title}
          fill
          className=" object-cover"
        />
      </div>
    );
  };

  return (
    <section className="py-[10%] md:py-[5%]  lg:px-10">
      <ViewLimit>
        <div className=" flex justify-center ">
          <h2 className="md:text-lg bg-secondary  py-1 rounded-full px-4 w-fit text-background ">
            Gallery
          </h2>
        </div>
        <h3 className="text-2xl md:text-4xl text-center py-5 px-5">
          A preview of what we can bring to life
        </h3>
        <div className="pt-[10%] flex justify-center">
          <div className="lg:hidden w-full ">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1.3}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
            >
              {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative w-full h-[500px] ">
                    <div className=" absolute inset-0 bg-black/5 z-10 text-background flex items-end">
                      <div className="p-5 text-xl font-semibold">
                        {src.title}
                      </div>
                    </div>
                    <Image
                      src={src.image}
                      alt={`Slide ${idx + 1}`}
                      fill
                      className=" object-cover rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="lg:grid grid-cols-3 gap-7 hidden w-full ">
            <div className=" mt-14 space-y-7">
              {images.map(
                (card, i) =>
                  i <= 2 && (
                    <div key={i}>
                      <Imagecard card={card} />
                    </div>
                  )
              )}
            </div>
            <div className="space-y-7">
              {images.map(
                (card, i) =>
                  i > 2 &&
                  i <= 5 && (
                    <div key={i}>
                      <Imagecard card={card} />
                    </div>
                  )
              )}
            </div>
            <div className="mt-14 space-y-7">
              {images.map(
                (card, i) =>
                  i > 5 &&
                  i <= 8 && (
                    <div key={i}>
                      <Imagecard card={card} />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </ViewLimit>
    </section>
  );
};

export default Gallery;
