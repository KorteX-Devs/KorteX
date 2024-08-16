import { FlipWords } from "@/components/ui/flip-words";
import MagicButton from "@/components/ui/magic-button";
import Image from "next/image";
import KorteXLogo from "@/assets/KorteX.svg";

export function InfoComponent() {
	return (
		<div className="flex flex-col 2xl:items-start 2xl:w-1/2 gap-6 w-fit items-center">
			<Image src={KorteXLogo} alt="KorteX Logo" />
			<div className="flex 2xl:items-start flex-col items-center gap-14">
				<div className="flex flex-col 2xl:items-start items-center gap-8">
					<h1 className="text-title-color 2xl:text-left text-center md:text-5xl text-3xl font-black leading-snug ">
						Construa projetos
						<br />
						<FlipWords
							words={[
								"INCRÍVEIS",
								"MODERNOS",
								"ELEGANTES",
								"CRIATIVOS",
								"RESPONSIVOS",
								"SOFISTICADOS",
								"INOVADORES",
							]}
						/>{" "}
						com a KorteX
					</h1>
					<p className="text-p-color lg:w-10/12 2xl:text-left text-center md:text-xl text-md">
						Criamos experiências digitais excepcionais com design refinado e
						tecnologia avançada, sempre com o objetivo de superar suas
						expectativas e deixar você satisfeito.
					</p>
				</div>
				<MagicButton> Confira nossos serviços </MagicButton>
			</div>
		</div>
	);
}
