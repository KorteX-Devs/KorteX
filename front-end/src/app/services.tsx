import React from "react";
import Image from "next/image";

function Services() {
  return (
    <section
      id="servicos"
      className="flex flex-col gap-15 items-center lg:p-0 p-10"
    >
      <h2 className="max-w-[800px] text-center">
        Como podemos{" "}
        <span className="bg-linear-to-r from-[#473BF0] via-[#00E2FD] to-[#871AFE] bg-clip-text text-transparent">
          transformar
        </span>{" "}
        o seu negócio.
      </h2>
      <div className="w-full flex flex-col justify-center items-center gap-10 h-full">
        <div className="h-1/2 w-full flex flex-col justify-center lg:flex-row gap-10">
          <div className="flex flex-col gap-4 -bg-linear-60 from-[#8d8d8d09] from-0% to-100% h-full relative to-[#ffffff0c] lg:w-1/2 rounded-3xl border-2 border-[#ffffff09]">
            <div className="flex flex-col gap-4 p-10 w-2/3">
              {" "}
              <h3>Desenvolvimento de software</h3>
              <p>
                Criamos aplicações sob medida para atender às necessidades
                específicas de cada cliente, com foco em performance, segurança
                e escalabilidade
              </p>
            </div>

            <Image
              src="/assets/dev-software-card.png"
              alt="Luz gradiente"
              width={2440}
              height={1080}
              className="w-2/3 h-fit rounded-br-3xl z-20 self-end "
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col gap-10">
            <div className="flex flex-col-reverse lg:flex-row gap-4 bg-gradient-to-r from-[#8d8d8d09] to-[#ffffff0c] w-full relative h-2/3 rounded-3xl border-2 border-[#ffffff09]">
              <div className="flex flex-col gap-4 items-center justify-center ml-10 w-1/2">
                <h3>Concepção de software</h3>
                <p>
                  Combinamos criatividade e conhecimento técnico para propor
                  soluções alinhadas ao seu negócio.
                </p>
              </div>
              <Image
                src="/assets/lamp-icon.png"
                alt="Luz gradiente"
                width={2440}
                height={1080}
                className="w-full h-full rounded-r-3xl z-20 self-center lg:self-end"
              />
            </div>

            <div className="flex flex-col gap-4 p-10 -bg-linear-60 from-[#8d8d8d09] from-0% to-100% w-full relative to-[#ffffff0c] h-1/3 rounded-3xl border-2 border-[#ffffff09] justify-center">
              <h3>Consultoria de software</h3>
              <p>
                Ajudamos sua empresa a tomar decisões técnicas com confiança.
                Atuamos com diagnóstico de sistemas, análise de viabilidade e
                escolha de tecnologias
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse gap-4 bg-gradient-to-r from-[#8d8d8d09] to-[#ffffff0c] justify-between w-full relative h-1/2 rounded-3xl border-2 border-[#ffffff09]">
          <div className="flex flex-col gap-4 p-10 w-full lg:w-2/3">
            <h3>Design de Arquitetura de Software</h3>
            <p>
              Estruturamos sistemas robustos, escaláveis e preparados para o
              futuro. Definimos arquiteturas modulares, seguras e resilientes,
              alinhadas com as melhores práticas e padrões do mercado.
            </p>
          </div>
          <Image
            src="/assets/arch.png"
            alt="Diagrama de arquitetura em nuvem"
            width={2440}
            height={1080}
            className="w-full lg:w-fit h-auto lg:h-full rounded-l-3xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
