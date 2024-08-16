import { HeroSection } from "./sections/hero-section";
import PortfolioSection from "./sections/portfolio-section";
import RatingsSection from "./sections/ratings-section";
import ContactSection from "./sections/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
	return (
		<div className="bg-custom-gradient min-h-screen flex flex-col gap-20">
			<HeroSection />
			<PortfolioSection />
			<RatingsSection />
			<ContactSection />
			<Footer />
		</div>
	);
}
