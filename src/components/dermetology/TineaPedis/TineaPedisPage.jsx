import * as React from "react";
import { TineaPedisHero } from "./TineaPedisHero";
import { TineaPedisPrevalence } from "./TineaPedisPrevalence";
import { TineaPedisTreatment } from "./TineaPedisTreatment";

export function TineaPedisPage() {
  return (
    <div className="flex overflow-hidden flex-wrap gap-0 items-start bg-white">
      <TineaPedisHero />
      <TineaPedisPrevalence />
      <TineaPedisTreatment />
    </div>
  );
}
