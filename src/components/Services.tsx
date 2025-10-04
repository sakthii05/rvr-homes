"use client";
import React, { useRef } from "react";
import ViewLimit from "./common/ViewLimit";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: "New Home Construction",
      description:
        "At RVR Homes, we specialize in building modern style apartments that balance tradition and contemporary living. Our constructions are designed with durability, comfort, and natural light in mind, ensuring every detail enhances family life. Using premium materials and trusted engineering, we create homes that last for generations. We bring your dream home to life with clarity and care.",
      image: "/images/services/home.webp",
    },

    {
      title: "Interior Design",
      description:
        "We design interiors that combine elegance, practicality, and personal taste for Tamil Nadu homes. Our approach maximizes every inch of space, blending wooden accents, neutral tones, and soft lighting for a timeless look. From living rooms to kitchens and bedrooms, we customize designs that reflect your lifestyle. The result is a home that feels modern, warm, and truly yours.",
      image: "/images/services/interior.webp",
    },
    {
      title: "Renovation",
      description:
        "Our renovation service transforms outdated spaces into fresh, functional, and stylish homes. Whether it's upgrading your kitchen, bathroom, or the entire apartment, we modernize while retaining cultural charm. With structural improvements and premium finishes, we give your home a complete makeover. Expect seamless execution, timely delivery, and stunning results.",
      image: "/images/services/renovation.webp",
    },
  ];

  useGSAP(
    () => {
      if (containerRef.current) {
        const cards = containerRef.current.querySelectorAll(".sticky-card");

        cards.forEach((card, index) => {
          // Skip the last card as it doesn't need to scale down
          if (index === cards.length) return;

          // Get the next card to use as trigger
          const nextCard = cards[index + 1];

          // Create scale down animation when next card enters viewport
          gsap.fromTo(
            card,
            {
              scale: 1,
              transformOrigin: "top center",
            },
            {
              scale: 0.9, // Scale down to 90%
              transformOrigin: "top center",
              ease: "power2.out",
              scrollTrigger: {
                trigger: nextCard,
                start: "top bottom", // When next card's top hits viewport bottom
                end: "top center", // When next card's top reaches viewport center
                scrub: 1, // Smooth animation tied to scroll
                // markers: true,    // Uncomment for debugging
                onUpdate: (self) => {
                  // Optional: Add additional effects based on progress
                  const progress = self.progress;
                  gsap.set(card, {
                    borderRadius: `${progress * 40}px`,
                  });
                },
              },
            }
          );
        });
      }
    },
    { scope: containerRef, dependencies: [cards.length] }
  );

  return (
    <section className="py-[10%] md:py-[5%] bg-accentBg" id="services">
      <ViewLimit>
        <div className=" flex justify-center ">
          <h2 className="md:text-lg bg-secondary py-1 rounded-full px-4 w-fit text-background ">
            Services
          </h2>
        </div>
        <h3 className="text-2xl md:text-4xl text-center py-5">
          What We Bring to You
        </h3>
        <p className="text-textlight font-medium text-lg md:text-xl text-center px-5">
          Find out which one of our services fit the needs of you
        </p>
        <div ref={containerRef} className="relative">
          {cards.map((card, i) => (
            <div
              key={i}
              className="h-screen sticky-card sticky top-0 flex justify-center items-center"
            >
              <div
                className={`h-[50vh] w-full lg:w-[90%] min-h-fit max-h-[500px] ${
                  i === 1
                    ? "bg-[#101014] text-background"
                    : " text-foreground bg-[#e9ecf2]"
                }  drop-shadow-lg rounded-2xl relative origin-top p-5 lg:p-5 grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-10`}
              >
                <div className="relative rounded-xl overflow-hidden col-span-1 h-[30vh] md:h-full md:col-span-2 ">
                  <Image
                    src={card.image}
                    fill
                    className=" object-cover "
                    alt={card.title}
                  />
                </div>
                <div className="space-y-5 col-span-1 md:col-span-3 lg:mt-5">
                  <h4 className=" text-3xl md:text-4xl font-medium">
                    {card.title}
                  </h4>
                  <p className=" text-lg lg:text-xl">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ViewLimit>
    </section>
  );
};

export default Services;
