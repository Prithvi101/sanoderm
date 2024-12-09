import * as React from "react";
import { InfoCard } from "./InfoCard";
import { ImageContainer } from "./ImageContainer";

const sectionData = {
  title: "Onychomycosis",
  description:
    "Onychomycosis is a disease caused by fungal infection of the nail and is an extremely common disorder worldwide.",
};

function OnychomycosisSection() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-28 w-full bg-slate-900 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="mb-0 w-full max-w-[1019px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <InfoCard
            title={sectionData.title}
            description={sectionData.description}
          />
          <ImageContainer />
        </div>
      </div>
    </div>
  );
}

export default OnychomycosisSection;
