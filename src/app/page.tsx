import Aboutus from "@/components/Aboutus";
import NoticeBanner from "@/components/common/NoticeBanner";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WeWork from "@/components/WeWork";
import Image from "next/image";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FiArrowUpRight } from "react-icons/fi";
import { RiMenuFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      {/* <NoticeBanner /> */}
      <HeroSection/>
      <Aboutus/>
      <Services/>
      <WeWork/>
      {/* <div className="h-screen bg-gray-400"></div> */}
    </>
  );
}
