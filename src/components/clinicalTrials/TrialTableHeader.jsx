import * as React from "react";

export function TrialTableHeader() {
  return (
    <div className="flex flex-wrap justify-between items-center w-full text-base leading-none text-black bg-gray-100 max-md:max-w-full">
      <div className="overflow-hidden gap-2 self-stretch px-2 py-4 my-auto border-r border-neutral-200 min-w-[240px] w-[400px]">
        StudyTitle (Code)
      </div>
      <div className="gap-2 self-stretch px-2 py-4 my-auto whitespace-nowrap border-r border-neutral-200 min-w-[240px] w-[300px]">
        Locations
      </div>
      <div className="flex-1 shrink gap-2 self-stretch px-2 py-4 my-auto whitespace-nowrap border-r border-neutral-200">
        Status
      </div>
      <div className="flex-1 shrink gap-2 self-stretch px-2 py-4 my-auto">
        Further Information
      </div>
    </div>
  );
}
