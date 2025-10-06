"use client";
import React from "react";
import ViewLimit from "./common/ViewLimit";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import LiveCount from "./common/LiveCount";

const Aboutus = () => {
  const images = [
    "/images/about/livingroom.webp",
    "/images/about/kitchen.webp",
    "/images/about/balcony.webp",
    "/images/about/bedroom.webp",
    "/images/about/garden.webp",
    "/images/about/bathroom.webp",
  ];

  const counts = [
    {
      count: 5,
      suffix: "+",
      title: "Projects completed",
      subtext: "Over 5+ successful projects delivered with quality and care",
    },
    {
      count: 25,
      suffix: "",
      title: "Skilled Tradespeople",
      subtext: "Our team of 25 experts ensures top-quality results",
    },
    {
      count: 100,
      suffix: "%",
      title: "Client satisfaction",
      subtext: "All of our clients are satisfied with our work and service",
    },
  ];
  return (
    <section className=" py-[10%] md:py-[5%] " id="aboutus">
      <ViewLimit>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 px-5 md:px-10">
          <div className="col-span-2 space-y-5">
            <h2 className="md:text-lg bg-lightBlue py-1 rounded-full px-4 w-fit text-background ">
              About Us
            </h2>
            <h3 className="text-2xl md:text-4xl">Complete Home Solutions</h3>
          </div>
          <div className="col-span-3">
            <p className="text-lg md:text-xl font-medium leading-relaxed md:leading-relaxed  text-textlight">
              Welcome to{" "}
              <span className="font-semibold text-foreground">RVR Homes</span>,
              where we turn houses into dream homes with creativity, precision,
              and care. Specializing in new home construction, renovations, and
              interior design, our team combines modern design with top-quality
              craftsmanship to bring your vision to life. we ensure a seamless
              experience built on trust, clear communication, and attention to
              detail. At RVR Homes, we don&#39;t just build spaces we create
              places you,ll truly love to live in.
            </p>
          </div>
        </div>
      </ViewLimit>
      <div className="pt-[5%]">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={1}
          spaceBetween={20}
          freeMode={{ enabled: true }}
          autoplay={{
            delay: 0.0, // for continuous movement
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={4000} // slow movement in ms
          loop={true}
          allowTouchMove={true} // manual scroll enabled
          pagination={false} // removes dots
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          style={{ cursor: "grab" }} // for desktop manual scroll feedback
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-[450px] ">
                <Image
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  fill
                  className=" object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ViewLimit>
        <div className="flex justify-center pt-[5%] px-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:w-[90%] lg:w-[80%] ">
            {counts.map((count, index) => (
              <div key={index} className="space-y-2 font-medium">
                <LiveCount
                  count={count.count}
                  suffix={count.suffix}
                  className={"font-medium font-figtree text-4xl md:text-5xl"}
                />
                <h4 className="text-xl sm:text-2xl ">{count.title}</h4>
                <p className="text-lg text-textlight ">{count.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </ViewLimit>
    </section>
  );
};

export default Aboutus;
