import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import KorteXLogo from "@/assets/KorteX.svg";
import Design from "@/assets/design.svg";
import MagicButton from "@/components/ui/magic-button";
import { FlipWords } from "@/components/ui/flip-words";

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { Compare } from "@/components/ui/compare";

export default function Home() {
  return (
    <div className="bg-custom-gradient min-h-screen">
      <section className="flex justify-center w-full items-center h-[100vh]">
        <BackgroundBeams className="absolute z-0" />
        <div className="flex items-center w-full justify-around z-10 p-28 gap-y-24">
          <div className="flex flex-col w-1/2 gap-6">
            <Image src={KorteXLogo} alt="KorteX Logo" />
            <div className="flex flex-col gap-14">
              <div className="flex flex-col gap-8">
                <h1 className="text-title-color text-5xl font-black leading-snug ">
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
                      "CUZINHO",
                    ]}
                  />{" "}
                  com a KorteX
                </h1>
                <p className="text-p-color text-xl">
                  Criamos experiências digitais excepcionais com design <br />
                  refinado e tecnologia avançada, sempre com o objetivo de
                  <br />
                  superar suas expectativas e deixar você satisfeito.
                </p>
              </div>
              <MagicButton> Confira nossos serviços </MagicButton>
            </div>
          </div>
          <div className="w-[712px] flex flex-col gap-5">
            <div className="flex gap-5 w-full h-[440px]">
              <div className="bg-grey-color border border-white/[0.08] rounded-3xl text-p-color w-1/2 p-10 h-full flex align-center gap-2 flex-col justify-center">
                <Image src={Design} alt="Design sob medida image" />
                <TextRevealCardTitle>Design sob medida</TextRevealCardTitle>

                <TextRevealCardDescription>
                  Cada projeto é uma obra-prima, desenvolvida para refletir a
                  essência da sua marca com estética refinada e funcionalidade
                  excepcional.
                </TextRevealCardDescription>
              </div>
              <div className="bg-purple-gradient border flex gap-8 items-center flex-col border-white/[0.08] rounded-3xl text-p-color w-1/2 p-10 h-full">
                <TextRevealCardTitle>
                  Código Robusto e Escalável
                </TextRevealCardTitle>
                <Compare
                  firstImage="https://assets.aceternity.com/code-problem.png"
                  secondImage="https://assets.aceternity.com/code-solution.png"
                  firstImageClassName="object-cover object-left-top"
                  secondImageClassname="object-cover object-left-top"
                  className="h-[150px] w-[100px] md:h-[300px] md:w-[300px] align-bottom"
                  slideMode="hover"
                />
              </div>
            </div>
            <div>
              <TextRevealCard
                text={"Seu Projeto"}
                revealText={"Nossa estrutura"}
              >
                <TextRevealCardTitle>
                  Suporte Técnico e Manutenção
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                  Oferecemos suporte técnico contínuo e serviços de manutenção
                  para garantir que sua presença online esteja sempre atualizada
                  e segura.
                </TextRevealCardDescription>
              </TextRevealCard>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[100vh]"></section>
    </div>
  );
}
