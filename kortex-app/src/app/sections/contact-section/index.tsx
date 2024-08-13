import MagicButton from "@/components/ui/magic-button";
import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center relative space-y-24 p-72">
      {/* Imagem centralizada e menor, em posição absoluta */}
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src="/Pattern1.svg"
          alt="plano de fundo"
          width={938} // Tamanho reduzido
          height={938}
          layout="intrinsic"
        />
      </div>

      {/* Texto e botão centralizados */}
      <div className="relative z-10 flex flex-col items-center p-8 rounded-lg">
        <h1 className="text-title-color text-5xl font-bold text-center mb-4">
          Entre em contato com a <span className="text-teal-300">KorteX</span> e
          <br />
          tire seu projeto do papel
        </h1>
        <p className="text-center text-white mb-6 max-w-2xl">
          Entre em contato hoje mesmo e vamos conversar sobre como podemos
          ajudar você a alcançar seus objetivos
        </p>
        <MagicButton>Entre em Contato</MagicButton>
      </div>
    </div>
  );
}
