import * as React from "react";
import { PipelineHeader } from "./PipelineHeader";
import { PipelineRow } from "./PipelineRow";
import { pipelineData } from "./PipelineData";

export function Pipeline() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full bg-zinc-50 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-center mb-0 w-full max-w-[1040px] max-md:mb-2.5 max-md:max-w-full">
        <div className="text-4xl font-semibold text-center text-green-800 max-md:max-w-full">
          Innovative Nanotech Therapies for Dermatology
        </div>
        <div className="mt-10 text-xl font-light leading-6 text-center text-stone-500 w-[820px] max-md:max-w-full">
          We have an exciting portfolio of clinical-stage, nanotechnology-based
          therapies for common dermatology conditions. These conditions are
          typically characterised by underlying infection and inflammation, and
          where current treatment options don't meet the patient needs.
          <br />
          <br />
          Sanoderm operates with a highly experienced drug discovery and
          clinical development team who have taken medicines from initial idea
          to the market. Our team collaborates with a range of academic and
          industrial partners and outsource providers to deliver our programmes.
        </div>
        <div className="flex flex-col self-stretch mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <PipelineHeader />
          {pipelineData.map((item, index) => (
            <PipelineRow key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
