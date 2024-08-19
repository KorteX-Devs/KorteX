import { HeroSection } from "./sections/hero-section";
import PortfolioSection from "./sections/portfolio-section";
import RatingsSection from "./sections/ratings-section";
import ContactSection from "./sections/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col gap-[10rem] bg-site-background">
      <HeroSection />
      <PortfolioSection />
      <RatingsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
