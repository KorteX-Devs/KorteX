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
      <div className="flex gap-5 w-full h-[440px]">
        <div className="bg-grey-color border border-white/[0.08] rounded-3xl text-p-color w-1/2 p-10 h-full flex align-center gap-2 flex-col justify-center">
          <Image src={Design} alt="Design sob medida image" />
          <TextRevealCardTitle>Design sob medida</TextRevealCardTitle>

          <TextRevealCardDescription>
            Cada projeto é uma obra-prima, desenvolvida para refletir a essência
            da sua marca com estética refinada e funcionalidade excepcional.
          </TextRevealCardDescription>
        </div>
        <div className="bg-purple-gradient border flex gap-8 items-center flex-col border-white/[0.08] rounded-3xl text-p-color w-1/2 p-10 h-full">
          <TextRevealCardTitle>Código Robusto e Escalável</TextRevealCardTitle>
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
