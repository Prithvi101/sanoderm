import * as React from "react";

export function PolicyHeader({ title, iconSrc }) {
  return (
    <div className="flex flex-wrap gap-6 items-center p-2 max-w-full text-4xl font-medium text-green-800 min-h-[65px] w-[1040px]">
      <img
        loading="lazy"
        src={iconSrc}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
      />
      <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
        {title}
      </div>
    </div>
  );
}
