import * as React from "react";

export function NanoMedicineHero() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-36 w-full text-center bg-slate-900 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col mb-0 max-w-full w-[525px] max-md:mb-2.5">
        <div className="self-center text-4xl font-black text-sky-700">
          Nanomedicine
        </div>
        <div className="mt-2.5 text-xl font-light leading-6 text-cyan-400 max-md:max-w-full">
          We are currently applying the latest developments in complex
          nanotechnology to develop more effective, safer, and easier to use
          topical treatments for a range of common dermatological conditions.
        </div>
      </div>
    </div>
  );
}
