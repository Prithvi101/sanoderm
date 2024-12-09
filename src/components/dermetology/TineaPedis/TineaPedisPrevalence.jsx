import * as React from "react";

export function TineaPedisPrevalence() {
  return (
    <div className="flex overflow-hidden flex-col grow shrink justify-center items-center px-20 py-28 text-center bg-zinc-50 w-[1152px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[814px]">
        <div className="self-center text-4xl font-semibold text-green-800 max-md:max-w-full">
          Prevalence and Impact of Tinea Pedis
        </div>
        <div className="mt-10 text-xl font-light leading-6 text-stone-500 max-md:max-w-full">
          Tinea pedis is an infection of the skin that causes itching, scaling,
          flaking, and blistering of the interdigital spaces of the foot. The
          prevalence of tinea pedis increases with age, and estimates suggest
          that 70% of the population will be affected by tinea pedis at some
          point in their life. Tinea pedis can currently be treated with oral
          antifungal medicines (taken by mouth), topical treatments applied
          directly to the skin, or a combination of both. Topical antifungal
          agents, many available over the counter, are generally used more
          frequently and are applied for 1-6 weeks.
        </div>
      </div>
    </div>
  );
}
