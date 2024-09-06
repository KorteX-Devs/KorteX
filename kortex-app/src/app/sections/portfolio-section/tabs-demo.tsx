"use client";

import { Tabs } from "@/components/ui/tabs";
import { projects } from "@/app/data/portfolioInfo";

export function TabsDemo() {
  return (
    <div className="h-fit [perspective:1000px] relative flex flex-col xl:flex-row 2xl:flex-col lg:max-w-[90%] w-full  items-center justify-start">
      <Tabs tabs={projects} />
    </div>
  );
}
