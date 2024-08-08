import { FlipWords } from "@/components/ui/flip-words";
import MagicButton from "@/components/ui/magic-button";
import Image from "next/image";
import KorteXLogo from "@/assets/KorteX.svg";

export function InfoComponent() {
  return (
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
  );
}
