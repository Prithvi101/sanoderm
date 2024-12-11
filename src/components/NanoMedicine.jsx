import * as React from "react";

export function Nanomedicine() {
  const headerContent = {
    title: "Nanomedicine",
    description:
      "Sanoderm applies the latest developments in complex nanotechnology to create more effective, safer, and easier to use topical treatments.",
  };

  return (
    <div className="flex overflow-hidden flex-col items-center px-20 pt-12 pb-20 w-full text-center bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[820px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2482864d79ba5ddb823d0b456efe2c25d30409fc853abc4c90eb1f17246c3825?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
          alt="Nanomedicine technology illustration"
          className="object-contain self-center max-w-full aspect-[1.46] w-[312px]"
        />
        <div className="flex flex-col items-center mt-14 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col w-full">
            <div className="text-4xl font-semibold text-green-800 max-md:max-w-full">
              {headerContent.title}
            </div>
            <div className="self-center mt-2 text-xl font-light leading-6 text-green-500 max-md:max-w-full">
              {headerContent.description}
            </div>
          </div>
          <div
            role="button"
            tabIndex={0}
            className="gap-2 self-stretch px-6 py-4 mt-10 text-base font-light text-white bg-lime-600 max-md:px-5"
          >
            Nanopolymer Drug Delivery Systems
          </div>
        </div>
      </div>
    </div>
  );
}
