import Image from "next/image";
import Header from "./header";
import HeroSection from "./hero-section";
import Services from "./services";
import Company from "./company";
import Clients from "./clients";
import Contacts from "./contacts";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="w-full h-fit self-center flex flex-col justify-center ">
      <Image
        src="assets/background-details.svg"
        alt="Padrão quadriculado com sombras"
        width={50}
        height={50}
        className="w-full h-4/5 top-0 absolute opacity-80"
      />
      <Image
        src="assets/background-light.svg"
        alt="Luz gradiente"
        width={200}
        height={100}
        className="w-full h-4/5 top-0 absolute"
      />
      <div className="w-full max-w-[1234px] gap-60 self-center flex flex-col py-6 justify-center">
        {" "}
        <Header />
        <HeroSection />
        <Services />
        <Company />
        <Clients />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}
