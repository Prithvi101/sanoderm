import * as React from "react";

export function ClinicalTrialsHeader() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center p-20 w-full text-center bg-slate-900 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[466px]">
        <div className="text-4xl font-black text-sky-700 max-md:max-w-full">
          Ongoing Clinical Trials
        </div>
        <div className="self-center mt-2.5 text-2xl font-light leading-none text-cyan-400">
          At Sanoderm
        </div>
      </div>
    </div>
  );
}
