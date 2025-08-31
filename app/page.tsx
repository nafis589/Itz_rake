import About from "@/landing/About/About";
import HeroSection from "@/landing/heroSection/HeroSection";
import CareerUIComponent from "@/landing/Service/CareerUIComponent";
import Testimonial from "@/landing/Testimonial/Testimonial";
import RuixenFeaturedImageSection from "@/components/ui/ruixen-featured-image-section";
import CalenderSection from "@/landing/calender/calenderSection";
import { Component } from "@/components/ui/footer-taped-design";


export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <About />
      <CareerUIComponent />
      <RuixenFeaturedImageSection />
      <Testimonial />
      <CalenderSection />
      <Component />
    </div>
  );
}
