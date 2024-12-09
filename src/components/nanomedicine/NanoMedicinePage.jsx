import * as React from "react";
import { NanoMedicineHero } from "./NanoMedicineHero";
import { NanoMedicineInfo } from "./NanoMedicineInfo";
import { NanoMedicineTreatment } from "./NanoMedicineTreatment";

export function NanoMedicinePage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <NanoMedicineHero />
      <NanoMedicineInfo />
      <NanoMedicineTreatment />
    </div>
  );
}
