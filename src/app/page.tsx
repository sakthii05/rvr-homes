import Aboutus from "@/components/Aboutus";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WeWork from "@/components/WeWork";


export default function Home() {
  return (
    <>
      <HeroSection />
      <Aboutus />
      <Services />
      <WeWork />
      <Gallery />
    </>
  );
}
