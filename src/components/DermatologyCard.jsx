import * as React from "react";

export default function DermatologyCard({ icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center self-stretch px-8 py-6 my-auto bg-stone-100 w-[175px] max-md:px-5 max-sm:mx-auto">
      <img
        loading="lazy"
        src={icon}
        alt={title}
        className="object-contain w-10 aspect-square"
      />
      <div className="flex flex-col justify-center self-stretch mt-2 w-full text-center">
        <div className="self-center text-xl text-green-800">{title}</div>
        {subtitle && (
          <div className="mt-1 text-base font-light text-stone-500">
            {subtitle}
          </div>
        )}
      </div>
      <div className="flex gap-2 items-center p-2 mt-2 w-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1d6e82f8149440c2619478281739bff0b93e7c83fd5387ddaec918b2f07386e?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
          alt=""
          className="object-contain self-stretch my-auto w-6 aspect-square"
        />
      </div>
    </div>
  );
}