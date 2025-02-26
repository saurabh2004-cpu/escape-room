
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import GamesSection from "@/components/GamesSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TestimonialSlider from "@/components/ReviewsCarousel";
import RoomCard from "@/components/RoomCard";
import TeamBuildingSection from "@/components/TeamBuildingSection";
import TeamSection from "@/components/TeamSection";
import WelcomeSection from "@/components/WelcomeSection";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <WelcomeSection />
      <RoomCard />
      <TeamBuildingSection />
      <GamesSection />
      <TeamSection />
      <TestimonialSlider />
      <FAQSection />
      <Footer />
    </>
  );
}
