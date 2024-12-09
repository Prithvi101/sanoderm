import * as React from "react";

export function TineaPedisTreatment() {
  return (
    <div className="flex overflow-hidden flex-col grow shrink items-end px-16 pt-36 bg-neutral-950 w-[1152px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="w-full max-w-[1127px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-10 max-md:mt-10 max-md:max-w-full">
              <div className="self-start text-4xl font-semibold text-green-800 max-md:max-w-full">
                Innovative Treatment Development
              </div>
              <div className="mt-4 text-xl font-light leading-6 text-green-500 max-md:max-w-full">
                Sanoderm is developing a new, topical antifungal spray
                formulation (BB1202) for the topical treatment of tinea pedis
                using our nanodelivery platform technology. By enhancing drug
                penetration into the upper layers of the skin, our aim is to be
                able to use significantly lower doses of an existing antifungal
                agent, but to match the efficacy and match or improve safety.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/930777e11b4f9169c9d4ae6cb2ba7406d3a7e5990f58f25cfca0748cc59c3220?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
              className="object-contain grow w-full aspect-[1.16] max-md:mt-10 max-md:max-w-full"
              alt="Treatment illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
