import * as React from "react";
import { ClinicalTrialsHeader } from "./ClinicalTrialsHeader";
import { ClinicalTrialsTable } from "./ClinicalTrialsTable";

export function ClinicalTrialsPage() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <ClinicalTrialsHeader />
      <ClinicalTrialsTable />
    </div>
  );
}
