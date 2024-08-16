"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

export function TabsDemo() {
	const tabs = [
		{
			title: "Esfirras61",
			value: "product",
			title_text: "Esfirras61: O poder do redesign",
			paragraph_text:
				"A Esfirras61 agora tem um site totalmente transformado, graças ao nosso trabalho dedicado de redesign. O novo layout é visualmente atraente e muito mais fácil de usar, com uma estética moderna que reflete a qualidade dos produtos",
			content: (
				<div className="w-full h-fit overflow-hidden relative rounded-2xl text-xl md:text-4xl font-bold text-white">
					<DummyContent src="/Esfirras61.png" />
				</div>
			),
		},
		{
			title: "Pavanini",
			value: "services",
			title_text: "Pavanini Design: Ecommerce e identidade visual",
			paragraph_text:
				"Este projeto foi realizado com o objetivo de alinhar o site à identidade única da Pavanini, garantindo que cada detalhe do design refletisse a paixão pela velocidade e a elegância dos carros, que são a marca registrada da empresa.",
			content: (
				<div className="w-full h-fit overflow-hidden relative rounded-2xl text-xl md:text-4xl font-bold text-white">
					<DummyContent src="/Pavanini.png" />
				</div>
			),
		},
		{
			title: "Treinador Ribeiro",
			value: "playground",
			title_text: "Treinador Ribeiro",
			paragraph_text:
				"O Treinador Ribeiro agora tem um site coerente com suas entregas e muito mais estético, graças ao nosso trabalho dedicado de desenvolvimento. Além disso, o site é completamente responsivo, garantindo uma experiência perfeita em qualquer dispositivo.",
			content: (
				<div className="w-full h-fit overflow-hidden relative rounded-2xl text-xl md:text-4xl font-bold text-white">
					<DummyContent src="/TreinadorRibeiro.png" />
				</div>
			),
		},
		{
			title: "AvaliaUNB",
			value: "content",
			title_text: "Avalia UNB",
			paragraph_text:
				"Nosso projeto foi dedicado à comunidade estudantil da Faculdade do Gama (FGA), Universidade de Brasília. A plataforma permite avaliações detalhadas, feedback construtivo e transparência na busca por conhecimento. Nós da KorteX desenvolvemos o produto do início ao fim, tanto em sua concepção e detalhes, até o código fonte.",
			content: (
				<div className="w-full h-fit overflow-hidden relative rounded-2xl text-xl md:text-4xl font-bold text-white">
					<DummyContent src="/AvaliaUNB.png" />
				</div>
			),
		},
	];

	return (
		<div className="h-fit [perspective:1000px] relative flex flex-col xl:flex-row 2xl:flex-col lg:max-w-[90%] w-full  items-center justify-start">
			<Tabs tabs={tabs} />
		</div>
	);
}

type DummyContentProps = {
	src: string;
};

const DummyContent: React.FC<DummyContentProps> = ({ src }) => {
	return (
		<div className="relative w-full pb-[64.8%]">
			<Image
				src={src}
				alt="dummy image"
				layout="fill"
				objectFit="contain"
				className="absolute inset-0 w-full h-full rounded-xl"
			/>
		</div>
	);
};
