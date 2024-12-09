import { Pipeline } from "@/components/about/Pipeline";
import PortfolioHero from "@/components/about/PortfolioHero";
import { Footer } from "@/components/Footer";
import StatsSection from "@/components/StatsStection";
import React from "react";

function page() {
  return (
    <div>
      <PortfolioHero></PortfolioHero>
      <Pipeline></Pipeline>
    </div>
  );
}

export default page;
