import React from "react";
import Image from "next/image";

function Company() {
  return (
    <section
      id="empresa"
      className="w-full flex flex-row-reverse justify-between"
    >
      <div className="w-1/2 flex flex-col gap-5">
        <h2 className="mb-5">
          Onde{" "}
          <span className="bg-linear-to-r from-[#473BF0] via-[#00E2FD] to-[#871AFE] bg-clip-text text-transparent">
            tecnologia
          </span>{" "}
          <br /> encontra{" "}
          <span className="bg-linear-to-r from-[#473BF0] via-[#00E2FD] to-[#871AFE] bg-clip-text text-transparent">
            visão.
          </span>
        </h2>
        <p>
          A KorteX Tech é uma empresa de soluções digitais especializada no
          desenvolvimento de aplicações web personalizadas, landing pages com
          alta taxa de conversão e produtos próprios no modelo micro-SaaS.{" "}
        </p>
        <p>
          Nascida da experiência em trabalhos freelancer e evoluída para uma
          estrutura co-fundada, a empresa combina tecnologia de ponta e visão
          estratégica para entregar sistemas escaláveis, robustos e de alta
          performance.
        </p>
      </div>
      <Image
        src="/assets/kortex-3dicon.png"
        alt="ícone 3D do Kortex"
        width={1200}
        height={1200}
        className="w-[800px] h-fit "
      />
    </section>
  );
}

export default Company;
