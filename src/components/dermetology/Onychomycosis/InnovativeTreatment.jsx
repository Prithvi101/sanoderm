import * as React from "react";

function InnovativeTreatment() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center p-20 w-full text-xl font-light text-center bg-zinc-50 text-stone-500 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[809px]">
        <div className="self-center text-4xl font-semibold text-sky-700 max-md:max-w-full">
          Innovative Treatment Development
        </div>
        <div className="mt-10 text-2xl leading-8 text-sky-700 max-md:mr-1.5 max-md:max-w-full">
          Sanoderm is developing a new topical antifungal spray formulation of
          terbinafine (BB2603) for the treatment of onychomycosis using our
          nanodelivery platform technology.
        </div>
        <div className="mt-8 leading-6 max-md:max-w-full">
          Our aim is to apply the spray directly to the nail, and through
          enhanced delivery of the active substance through the nail, to match
          the cure rates of the more effective oral formulations in a topical
          medicine, without the associated safety concerns.
        </div>
        <div className="mx-4 mt-8 leading-6 max-md:mr-2.5 max-md:max-w-full">
          More information for patients with onychomycosis can be found on the{" "}
          <span className="text-sky-700">
            British Association of Dermatologists A-Z
          </span>{" "}
          of treatments and conditions.
        </div>
        <div className="self-center mt-8 leading-tight max-md:max-w-full">
          Information on Sanoderm clinical trials in onychomycosis can be found
          on our <span className="text-sky-700">clinical trials</span> page.
        </div>
      </div>
    </div>
  );
}

export default InnovativeTreatment;
