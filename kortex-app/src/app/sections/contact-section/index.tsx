"use client";

import MagicButton from "@/components/ui/magic-button";
import { handleContatoClick } from "@/generals/handleContatoClick";
import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center min-h-[700px] relative space-y-24">
      <div className="absolute inset-0 flex justify-center items-center h-fit">
        <Image
          src="/Pattern1.svg"
          alt="plano de fundo"
          width={938}
          height={938}
          layout="intrinsic"
          className="min-w-[700px] h-fit"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-8 rounded-lg">
        <h1 className="text-title-color  md:text-5xl text-3xl font-bold text-center mb-4">
          Entre em contato com a <span className="text-teal-300">KorteX</span> e
          <br />
          tire seu projeto do papel
        </h1>
        <p className="text-center text-p-color mb-6 max-w-2xl">
          Entre em contato hoje mesmo e vamos conversar sobre como podemos
          ajudar você a alcançar seus objetivos
        </p>
        <MagicButton onClick={handleContatoClick}>Entre em Contato</MagicButton>
      </div>
    </div>
  );
}
