import * as React from "react";

export function InfoCard({ title, description }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto max-md:mt-10">
        <div className="self-start text-4xl font-black text-sky-700">
          {title}
        </div>
        <div className="mt-2.5 text-xl font-light leading-6 text-cyan-400">
          {description}
        </div>
      </div>
    </div>
  );
}
