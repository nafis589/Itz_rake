import About from "@/landing/About/About";
import HeroSection from "@/landing/heroSection/HeroSection";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <About />
    </div>
  );
}
