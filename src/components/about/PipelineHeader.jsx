import * as React from "react";

export function PipelineHeader() {
  return (
    <div className="flex flex-wrap items-center w-full text-base leading-none text-black max-md:max-w-full">
      <div className="flex grow shrink justify-between items-center self-stretch my-auto whitespace-nowrap min-w-[240px] w-[328px]">
        <div className="overflow-hidden flex-1 shrink gap-2 self-stretch px-2 py-4 my-auto">
          Product
        </div>
        <div className="flex-1 shrink gap-2 self-stretch px-2 py-4 my-auto">
          Indication
        </div>
      </div>
      <div className="flex flex-wrap grow shrink justify-between items-center self-stretch my-auto min-w-[240px] w-[548px] max-md:max-w-full">
        <div className="overflow-hidden flex-1 shrink gap-2 self-stretch px-2 py-4 my-auto whitespace-nowrap min-h-[54px]">
          Preclinical
        </div>
        <div className="overflow-hidden flex-1 shrink gap-2 self-stretch px-2 py-4 my-auto min-h-[54px]">
          Phase I/II
        </div>
        <div className="overflow-hidden flex-1 shrink gap-2 self-stretch px-2 py-4 my-auto min-h-[54px]">
          Phase II
        </div>
        <div className="overflow-hidden flex-1 shrink gap-2 self-stretch px-2 py-4 my-auto min-h-[54px]">
          Phase III
        </div>
        <div className="overflow-hidden flex-1 shrink gap-2 self-stretch px-2 py-1.5 my-auto leading-6 whitespace-nowrap min-h-[54px]">
          Marketing
          <br />
          Authorisation
        </div>
      </div>
    </div>
  );
}
