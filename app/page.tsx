import About from "@/landing/About/About";
import HeroSection from "@/landing/heroSection/HeroSection";
import CareerUIComponent from "@/landing/Service/CareerUIComponent";
import Testimonial from "@/landing/Testimonial/Testimonial";

import CalenderSection from "@/landing/calender/calenderSection";
import Footer from "@/landing/Footer/Footer";


export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <About />
      <CareerUIComponent />
      
      <Testimonial />
      <CalenderSection />
      <Footer />
    </div>
  );
}
