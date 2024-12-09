import * as React from "react";

export default function NavigationItem({ text, bgColor, hasDropdown = false }) {
  return (
    <div className={`flex grow shrink gap-2 self-stretch px-7 py-5  h-16 my-auto whitespace-nowrap cursor-pointer ${bgColor}`}>
      <div className="grow">{text}</div>
      {hasDropdown && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f80aea61178b1400c8e8229198d3003ae6eab1dcc923120a06ed27785d38322?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
          alt=""
          className="object-contain shrink-0 self-start mt-2 w-2.5 aspect-square"
        />
      )}
    </div>
  );
}