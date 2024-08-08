import { BackgroundBeams } from "@/components/ui/background-beams";
import { GridComponent } from "./grid";
import { InfoComponent } from "./info-logo";

export function HeroSection() {
  return (
    <section className="flex justify-center w-full items-center h-[100vh]">
      <BackgroundBeams className="absolute z-0" />
      <div className="flex items-center w-full justify-around z-10 p-28 gap-y-24">
        <InfoComponent />
        <GridComponent />
      </div>
    </section>
  );
}
