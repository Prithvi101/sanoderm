import * as React from "react";

export function NanoMedicineTreatment() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-32 w-full bg-slate-900 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="mb-0 ml-7 w-full max-w-[1091px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-semibold leading-10 text-sky-700 w-[472px] max-md:max-w-full">
                How Our Nanoparticle Formulations Improve Treatment
              </div>
              <div className="mt-2.5 text-xl font-light leading-6 text-cyan-400 max-md:max-w-full">
                Topical delivery of drugs for skin conditions is hindered by the
                natural physical barriers of the skin and nails. Our unique drug
                formulations (for example, BB2603 for the treatment of fungal
                nail infection) use polymers that complex with the active drug
                and form nanoparticles. These nanoparticles can improve drug
                solubility, stability, retention and importantly, delivery to
                the active disease site. This means better efficacy, but also
                the potential for reduced doses of active drug, with better
                safety and tolerability for patients.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1abb8c372c357ab57d3d8e76dc43b9cff9d50b890d9fac41321dd2ef89e65a1e?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
              className="object-contain grow mt-2 w-full aspect-[1.47] max-md:mt-10 max-md:max-w-full"
              alt="Nanoparticle formulation illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
