import { HeroSection } from "./sections/hero-section";
import PortfolioSection from "./sections/portfolio-section";
import RatingsSection from "./sections/ratings-section";

export default function Home() {
	return (
		<div className="bg-custom-gradient min-h-screen">
			<HeroSection />
			<PortfolioSection />
			<RatingsSection />
		</div>
	);
}
