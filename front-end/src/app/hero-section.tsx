import React from "react";

function HeroSection() {
	return (
		<section className="w-full items-center justify-center gap-15 min-h-screen flex flex-col">
			<h1 className="text-center">
				Crescer com consistência. <br />
				<span className="bg-linear-to-r from-[#473BF0] via-[#00E2FD] to-[#871AFE] bg-clip-text text-transparent">
					{" "}
					Escalar com confiança
				</span>
			</h1>
			<p className="text-2xl text-center max-w-[700px]">
				Sistemas web bem projetados para atender às demandas atuais do seu
				negócio, com uma arquitetura sólida e flexível, preparada para
				acompanhar seu crescimento
			</p>
			<div className="flex flex-col gap-4 items-center">
				{" "}
				<button className="text-md bg-[#4343f15e] px-12 py-5 rounded-lg ">
					Conheça os serviços
				</button>
				<p>Atuando desde 2022</p>
			</div>
		</section>
	);
}

export default HeroSection;

