import { HeroParallax } from "@/components/ui/hero-parallax";
import React from "react";
import { projects } from "@/app/data/portfolioInfo";

function PortfolioSection() {
	return (
		<section className="h-fit">
			<HeroParallax products={projects} />
		</section>
	);
}

export default PortfolioSection;
