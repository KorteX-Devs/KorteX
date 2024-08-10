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
      <div className="flex flex-col gap-5 md:flex-row w-full">
        <div className="bg-grey-color w-full border border-white/[0.08] rounded-3xl text-p-color p-6 sm:p-10 flex flex-col justify-center items-center gap-2 min-h-fit">
          <Image
            src={Design}
            alt="Design sob medida image"
            className="w-24 h-24 sm:w-auto sm:h-auto"
          />
          <TextRevealCardTitle>Design sob medida</TextRevealCardTitle>
          <TextRevealCardDescription>
            Cada projeto é uma obra-prima, desenvolvida para refletir a essência
            da sua marca com estética refinada e funcionalidade excepcional.
          </TextRevealCardDescription>
        </div>
        <div className="w-full bg-purple-gradient border flex flex-col items-center gap-8 border-white/[0.08] rounded-3xl text-p-color p-6 sm:p-10 min-h-80">
          <TextRevealCardTitle>Código Robusto e Escalável</TextRevealCardTitle>
          <Compare
            firstImage="https://assets.aceternity.com/code-problem.png"
            secondImage="https://assets.aceternity.com/code-solution.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] lg:h-[280px] lg:w-[280px]"
            slideMode="hover"
          />
        </div>
      </div>
      <div className="bg-grey-color w-full rounded-3xl p-6 sm:p-10 flex flex-col justify-center items-center gap-2 min-h-fit">
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
