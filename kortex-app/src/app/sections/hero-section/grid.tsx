import { Compare } from "@/components/ui/compare";
import {
	TextRevealCardTitle,
	TextRevealCardDescription,
	TextRevealCard,
} from "@/components/ui/text-reveal-card";
import Design from "@/assets/design.svg";
import Image from "next/image";

export function GridComponent() {
	return (
		<div className="w-[712px] flex flex-col gap-5">
			<div className="flex gap-5 flex-col md:flex-row w-full ">
				<div className="bg-grey-color w-full border border-white/[0.08] rounded-3xl text-p-color md:w-1/2 p-10 flex align-center gap-2 flex-col justify-center min-h-fit">
					<Image src={Design} alt="Design sob medida image" />
					<TextRevealCardTitle>Design sob medida</TextRevealCardTitle>

					<TextRevealCardDescription>
						Cada projeto é uma obra-prima, desenvolvida para refletir a essência
						da sua marca com estética refinada e funcionalidade excepcional.
					</TextRevealCardDescription>
				</div>
				<div className="w-full bg-purple-gradient border flex gap-8 items-center flex-col border-white/[0.08] rounded-3xl text-p-color md:w-1/2 p-10 min-h-80">
					<TextRevealCardTitle>Código Robusto e Escalável</TextRevealCardTitle>
					<Compare
						firstImage="https://assets.aceternity.com/code-problem.png"
						secondImage="https://assets.aceternity.com/code-solution.png"
						firstImageClassName="object-cover object-left-top"
						secondImageClassname="object-cover object-left-top"
						className="h-[250px] w-[250px] lg:h-[280px] lg:w-[280px] align-bottom"
						slideMode="hover"
					/>
				</div>
			</div>
			<div>
				<TextRevealCard text={"Seu Projeto"} revealText={"Nossa estrutura"}>
					<TextRevealCardTitle>
						Suporte Técnico e Manutenção
					</TextRevealCardTitle>
					<TextRevealCardDescription>
						Oferecemos suporte técnico contínuo e serviços de manutenção para
						garantir que sua presença online esteja sempre atualizada e segura.
					</TextRevealCardDescription>
				</TextRevealCard>
			</div>
		</div>
	);
}
