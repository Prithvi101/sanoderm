import * as React from "react";

export function NanoMedicineInfo() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-24 w-full font-light text-center text-sky-700 bg-zinc-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[819px]">
        <div className="self-center text-4xl font-semibold max-md:max-w-full">
          Transforming Skin Treatments with Nanotechnology
        </div>
        <div className="mt-10 mr-4 ml-4 text-2xl leading-8 max-md:mr-2.5 max-md:max-w-full">
          Sanoderm apply the latest advances in complex nanotechnology to
          develop more effective, safer, and easier to use topical treatments
          for a range of common skin conditions.
        </div>
        <div className="mt-8 text-xl leading-6 text-stone-500 max-md:max-w-full">
          'Nanotechnology' describes the formation of materials that are
          measured in nanometres — equal to about one-billionth of a metre —
          smaller than can be detected under a standard microscope. This
          exciting technology can be applied to existing topical medicines to
          overcome pre-existing limitations.
        </div>
      </div>
    </div>
  );
}
