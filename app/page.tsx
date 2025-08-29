import About from "@/landing/About/About";
import HeroSection from "@/landing/heroSection/HeroSection";
import CareerUIComponent from "@/landing/Service/CareerUIComponent";
import Testimonial from "@/landing/Testimonial/Testimonial";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <About />
      <CareerUIComponent />
      <Testimonial />
    </div>
  );
}
