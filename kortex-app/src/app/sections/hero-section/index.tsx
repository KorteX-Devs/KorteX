import { BackgroundBeams } from "@/components/ui/background-beams";
import { GridComponent } from "./grid";
import { InfoComponent } from "./info-logo";
import image from "../../../../public/background-hero.svg";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="flex justify-center w-full h-fit min-h-[100vh]"
    >
      <BackgroundBeams />
      <Image
        src={image}
        alt="Galaxy"
        className="absolute opacity-40 w-screen h-screen object-cover"
      />

      <div className="flex flex-wrap items-center w-full justify-around z-10 p-10 md:p-60 gap-y-16">
        <InfoComponent />
        <GridComponent />
      </div>
    </section>
  );
}
