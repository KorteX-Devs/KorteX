"use client";

import React from "react";
import Image from "next/image";

export function scrollIntoView(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function Header() {
  return (
    <header className="w-full flex flex-wrap md:justify-between md:gap-0 gap-10 justify-center items-center z-50">
      <div className="flex items-center gap-6">
        <Image
          src="assets/kortex-logo.svg"
          alt="Kortex Logo"
          width={50}
          height={50}
        />
        <p className="font-medium text-2xl text-zinc-50">Kortex</p>
      </div>
      <ul className="flex flex-wrap items-center justify-center gap-8">
        <li>
          <button
            className="cursor-pointer"
            onClick={() => scrollIntoView("servicos")}
          >
            Serviços
          </button>
        </li>
        <li>
          <button
            className="cursor-pointer"
            onClick={() => scrollIntoView("empresa")}
          >
            Empresa
          </button>
        </li>
        <li>
          <button
            className="cursor-pointer"
            onClick={() => scrollIntoView("clientes")}
          >
            Nossos Clientes
          </button>
        </li>
        <li>
          <button
            className="cursor-pointer"
            onClick={() => scrollIntoView("contatos")}
          >
            Contatos
          </button>
        </li>
      </ul>
      <button
        onClick={() => scrollIntoView("contatos")}
        className="text-md -bg-linear-60 from-[#ffffff08] from-0% to-100% to-[#ffffff24] px-6 py-2 rounded-lg cursor-pointer hover:bg-blue-950 duration-300"
      >
        Fale conosco
      </button>
    </header>
  );
}

export default Header;
