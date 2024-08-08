import { HeroSection } from "./sections/hero-section";

export default function Home() {
  return (
    <div className="bg-custom-gradient min-h-screen">
      <HeroSection />
      <section className="h-[100vh]" />
    </div>
  );
}
