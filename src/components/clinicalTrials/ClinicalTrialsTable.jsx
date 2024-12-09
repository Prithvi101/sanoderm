import * as React from "react";
import { TrialTableHeader } from "./TrialTableHeader";
import { TrialRow } from "./TrialRow";

export function ClinicalTrialsTable() {
  const trials = [
    {
      title:
        "Multi-centre, international, randomised, vehicle controlled, parallel-group, double-blinded Phase 2 trial of BB2603 topical treatment in subjects with distal subungual onychomycosis (DSO) of the toenail (BBTAF202).",
      locations: "Europe (Germany, Poland, Czech Republic)",
      status: "Completed",
    },
    {
      title:
        "Early phase development, partly blinded, positive and vehicle controlled, randomised, non-inferiority investigation of the pharmacokinetics, safety and efficacy of BB2603 cutaneous hand-pump spray versus Lamisil® spray and versus BB2603 vehicle hand-pump spray in subjects with onychomycosis and associated tinea pedis (BBT120126032001).",
      locations: "Germany",
      status: "Completed",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center p-20 w-full bg-zinc-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full border border-solid border-zinc-200 max-w-[1040px] max-md:max-w-full">
        <TrialTableHeader />
        {trials.map((trial, index) => (
          <TrialRow
            key={index}
            title={trial.title}
            locations={trial.locations}
            status={trial.status}
            isLast={index === trials.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
