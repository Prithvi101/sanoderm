import * as React from "react";

function CurrentTreatmentOptions() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center p-20 w-full bg-slate-900 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col ml-7 w-full max-w-[1091px] max-md:max-w-full">
        <div className="self-start text-4xl font-semibold text-sky-700">
          Current Treatment Options
        </div>
        <div className="mt-4 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="text-xl font-light leading-6 text-cyan-400 max-md:mt-10 max-md:max-w-full">
                Drug treatments are available for onychomycosis, with oral
                (taken by mouth) antifungal medicines generally being more
                effective than current topical ones (applied directly onto the
                nail).
                <br />
                <br />
                Terbinafine is the oral medication that is generally recommended
                for initial use in more severe cases when dermatophyte fungi are
                responsible; however, terbinafine tablets may have potentially
                serious side effects and can interact with other medicines, so
                are not suitable for all patients. Although topical treatments
                have fewer safety concerns, they tend to be less effective as it
                is difficult for an active substance applied topically to
                sufficiently penetrate through the nail barrier to the site of
                infection in the nail bed.
                <br />
                <br />
                Topical treatments also have longer treatment times (typically
                at least a year) and high levels of relapse as patients struggle
                to continue treatment for the necessary time.
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1abb8c372c357ab57d3d8e76dc43b9cff9d50b890d9fac41321dd2ef89e65a1e?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
                className="object-contain w-full aspect-[1.47] max-md:mt-10 max-md:max-w-full"
                alt="Treatment options illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentTreatmentOptions;
