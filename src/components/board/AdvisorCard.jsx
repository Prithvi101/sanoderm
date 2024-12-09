import * as React from "react";

export function AdvisorCard({ name, role, description }) {
  return (
    <div className="flex flex-col grow px-6 py-12 w-full border-b border-cyan-400 bg-slate-50 max-md:px-5 max-md:mt-8 max-md:max-w-full">
      <div className="flex flex-col self-start text-sky-700">
        <div className="text-xl font-black">{name}</div>
        <div className="mt-1 text-base font-light leading-none">{role}</div>
      </div>
      <div className="mt-5 text-base font-light leading-6 text-stone-500">
        {description}
      </div>
    </div>
  );
}
