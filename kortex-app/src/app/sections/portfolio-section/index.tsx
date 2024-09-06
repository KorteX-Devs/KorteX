import React from "react";
import { TabsDemo } from "./tabs-demo";
import Badge from "@/components/badge";

function PortfolioSection() {
  return (
    <section
      id="portifolio"
      className="min-h-[100vh] h-fit p-10 flex flex-col items-center"
    >
      <Badge>Nossos projetos</Badge>
      <TabsDemo />
    </section>
  );
}

export default PortfolioSection;
