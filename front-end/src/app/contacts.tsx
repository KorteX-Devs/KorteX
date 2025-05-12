"use client";

import React, { useState } from "react";
import Image from "next/image";

function Contacts() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [assunto, setAssunto] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (name === "" || email === "" || assunto === "" || mensagem === "") {
      setStatus("Por favor, preencha todos os campos.");
      setTimeout(() => {
        setStatus("");
      }, 4000);
      return;
    }
    if (!isValidEmail(email)) {
      setStatus("Por favor, insira um e-mail válido.");
      setTimeout(() => {
        setStatus("");
      }, 4000);
      return;
    }
    try {
      const response = await fetch("https://formspree.io/f/xbldnjba", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          assunto,
          mensagem,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("E-mail enviado com sucesso!");
      } else {
        setStatus("Erro ao enviar o e-mail!");
      }
    } catch {
      setStatus("Erro ao enviar o e-mail!");
    } finally {
      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  };

  return (
    <section id="contatos" className="flex">
      <div className="w-1/2 flex flex-col gap-5">
        <h2>
          Entre em contato com a{" "}
          <span className="bg-linear-to-r from-[#473BF0] via-[#00E2FD] to-[#871AFE] bg-clip-text text-transparent">
            KorteX
          </span>{" "}
          e tire seus projetos do {""}
          <span>
            papel{" "}
            <Image
              src="/assets/projectsdetail.svg"
              alt="ícone 3D do Kortex"
              width={200}
              height={200}
              className="w-fit h-fit mt-2 "
            />
          </span>
        </h2>
        <p>
          Entre em contato hoje mesmo e vamos conversar sobre como podemos
          ajudar você a alcançar seus objetivos.
        </p>
      </div>
      <div className="w-1/2">
        <div className="mb-2">
          <input
            maxLength={80}
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Seu Nome"
            className="w-full min-h-[52px] px-4 py-2 border-2 text-dark-grey-900 placeholder:text-sm border-light-grey-900  rounded-lg focus:outline-none "
          />
        </div>
        <div className="mb-2 flex gap-4 min-h-[52px] items-center px-4 py-2 border-2 border-light-grey-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-purple-900">
          <input
            maxLength={80}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Seu Email"
            className="w-full bg-none  text-dark-grey-900 placeholder:text-sm focus:outline-none "
          />
        </div>
        <div className="mb-2 flex gap-4 min-h-[52px] items-center px-4 py-2 border-2 border-light-grey-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-purple-900">
          <input
            maxLength={80}
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
            type="text"
            placeholder="Assunto"
            className="w-full bg-none  text-dark-grey-900 placeholder:text-sm focus:outline-none "
          />
        </div>
        <div className="mb-4 flex gap-4 min-h-[52px] items-center px-4 py-2 border-2 border-light-grey-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-purple-900">
          <textarea
            maxLength={256}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Mensagem"
            className="w-full text-dark-grey-900  placeholder:text-sm focus:outline-none h-20 "
          />
        </div>
        <button
          onClick={async () => {
            await handleSubmit();
          }}
          className="text-md -bg-linear-60 from-[#ffffff08] from-0% to-100% to-[#ffffff24] w-full py-3 rounded-lg hover:bg-[#4343f191] duration-300 cursor-pointer"
        >
          Enviar{" "}
        </button>
        {status}
      </div>
    </section>
  );
}

export default Contacts;
