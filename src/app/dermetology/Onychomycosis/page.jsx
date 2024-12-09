import CurrentTreatmentOptions from "@/components/dermetology/Onychomycosis/CurrentTreatmentOptions";
import InnovativeTreatment from "@/components/dermetology/Onychomycosis/InnovativeTreatment";
import OnychomycosisPrevalence from "@/components/dermetology/Onychomycosis/OnychomycosisPrevalence";
import OnychomycosisSection from "@/components/dermetology/Onychomycosis/OnychomycosisSection";
import React from "react";

function page() {
  return (
    <div className="max-w-7xl m-auto">
      <OnychomycosisSection></OnychomycosisSection>
      <OnychomycosisPrevalence></OnychomycosisPrevalence>
      <CurrentTreatmentOptions></CurrentTreatmentOptions>
      <InnovativeTreatment></InnovativeTreatment>
    </div>
  );
}

export default page;
