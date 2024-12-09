import * as React from "react";

export function TrialRow({ title, locations, status, isLast }) {
  return (
    <div
      className={`flex flex-wrap justify-between w-full ${
        !isLast ? "border-b border-neutral-200" : ""
      } max-md:max-w-full`}
    >
      <div className="overflow-hidden gap-2 px-2 py-6 my-auto text-lg font-light leading-7 text-black border-r border-neutral-200 min-w-[240px] w-[400px]">
        {title}
      </div>
      <div className="gap-2 px-2 py-6 h-full text-lg font-light leading-7 text-black border-r border-neutral-200 min-w-[240px] w-[300px]">
        {locations}
      </div>
      <div className="flex-1 shrink gap-2 px-2 py-6 h-full text-lg leading-none text-sky-700 whitespace-nowrap border-r border-neutral-200">
        {status}
      </div>
      <div className="flex flex-1 shrink gap-2 items-start py-6 pr-2 pl-4 h-full basis-0">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea1c628d4dbddbe59714541c28946c699077d777f75e41a475eef1d32ddd2746?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
          className="object-contain w-6 aspect-square"
          alt="Further information icon"
        />
      </div>
    </div>
  );
}
