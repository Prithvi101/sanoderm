import * as React from "react";

export function PipelineRow({ product, indication, progressWidth, phase }) {
  return (
    <div className="flex flex-wrap items-center w-full border-b border-neutral-200 max-md:max-w-full">
      <div className="flex grow shrink justify-between items-center self-stretch my-auto text-lg font-light text-black min-w-[240px] w-[328px]">
        <div className="flex-1 shrink gap-2 self-stretch py-8 pr-4 pl-2 my-auto leading-none">
          {product}
        </div>
        <div className="flex-1 shrink gap-2 self-stretch px-2 py-5 my-auto leading-7 min-h-[90px]">
          {indication}
        </div>
      </div>
      <div className="flex relative grow shrink justify-between self-stretch my-auto min-h-[90px] min-w-[240px] w-[548px] max-md:max-w-full">
        <div className="flex z-0 flex-1 shrink gap-2 py-8 border-l basis-0 border-neutral-200 h-[90px] w-[126px]" />
        <div className="flex z-0 flex-1 shrink gap-2 py-8 border-l basis-0 border-neutral-200 h-[90px] w-[126px]" />
        <div className="flex z-0 flex-1 shrink gap-2 py-8 border-l basis-0 border-neutral-200 h-[90px] w-[126px]" />
        <div className="flex z-0 flex-1 shrink gap-2 py-8 border-l basis-0 border-neutral-200 h-[90px] w-[126px]" />
        <div className="flex z-0 flex-1 shrink gap-2 py-8 border-l basis-0 border-neutral-200 h-[90px] w-[126px]" />
        <div className="flex absolute left-0 z-0 items-center self-start bottom-[17px]">
          <div
            className="flex shrink-0 self-stretch my-auto h-14 bg-lime-600"
            style={{ width: progressWidth }}
          />
          {phase !== "preclinical" && (
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e29f8eb3a11b341e6fbee8d681b4771fe992244212cea0def264785764a5fe7?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-[0.43]"
            />
          )}
          {phase === "preclinical" && (
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bdf358d929a62c8f2c806d45dd52388c320358ac6d74d250e4c154e74a53dde?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-[2.05] w-[115px]"
            />
          )}
        </div>
      </div>
    </div>
  );
}
