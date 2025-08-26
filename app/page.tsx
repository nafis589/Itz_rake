import About from "@/landing/About/About";
import HeroSection from "@/landing/heroSection/HeroSection";
import CareerUIComponent from "@/landing/Service/CareerUIComponent";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <About />
      <CareerUIComponent />
    </div>
  );
}
