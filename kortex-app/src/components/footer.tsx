"use client";

import Image from "next/image";
import { handleScroll } from "@/generals/handleScroll";
import { handleContatoClick } from "@/generals/handleContatoClick";
import { getDate } from "@/generals/getDate";

export function Footer() {
  return (
    <footer className="w-full h-20 flex items-center justify-center text-p-color mb-20">
      <div className="flex w-full max-w-[1240px] md:flex-row flex-col-reverse items-center gap-4 justify-around">
        <p>&copy; {getDate().year} KorteX.</p>
        <div className="flex justify-between w-60">
          <a href="https://www.instagram.com/kortex_tecnologia/" target="blank">
            <Image
              src="/Instagram.svg"
              alt="instagram logo"
              width={40}
              height={40}
            />
          </a>
          <a href="https://github.com/KorteX-Devs" target="blank">
            <Image src="/Github.svg" alt="github logo" width={40} height={40} />
          </a>
          <button className="" onClick={handleContatoClick}>
            <Image
              src="/Whats.svg"
              alt="whatsapp logo"
              width={40}
              height={40}
            />
          </button>
          <a href="#">
            <Image
              src="/linkedin.svg"
              alt="linkedin logo"
              width={40}
              height={40}
            />
          </a>
        </div>
        <button onClick={() => handleScroll("#hero-section")}>
          <Image src="/KorteX.svg" alt="KorteX logo" width={163} height={78} />
        </button>
      </div>
    </footer>
  );
}
