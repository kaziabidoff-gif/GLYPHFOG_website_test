import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Process } from "@/components/sections/Process";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { WhyGlyphfog } from "@/components/sections/WhyGlyphfog";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Capabilities />
      <WhatWeBuild />
      <SelectedWork />
      <Process />
      <WhyGlyphfog />
      <About />
      <FinalCTA />
    </>
  );
}
