import * as React from "react";

function OnychomycosisPrevalence() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center p-20 w-full font-light text-center text-sky-700 bg-zinc-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[817px]">
        <div className="self-center text-4xl font-semibold max-md:max-w-full">
          Prevalence and Impact of Onychomycosis
        </div>
        <div className="mt-10 text-2xl leading-8 max-md:max-w-full">
          Onychomycosis is very common; prevalence rates are as high as 23% in
          Europe, 20% in East Asia and 14% in North America, and are expected to
          increase further.
        </div>
        <div className="mt-8 text-xl leading-6 text-stone-500 max-md:mr-1.5 max-md:max-w-full">
          It becomes more common with increased age and in some patients with
          conditions such as diabetes and poor peripheral circulation. The
          fungus that causes onychomycosis (dermatophytes) is usually the same
          that that causing athlete's foot. The nails in patients with
          onychomycosis become thickened, discoloured, disfigured and often
          split. This can cause physical as well as psychological distress.
        </div>
      </div>
    </div>
  );
}

export default OnychomycosisPrevalence;
