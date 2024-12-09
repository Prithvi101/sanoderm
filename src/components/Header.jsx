import * as React from "react";

export default function Header() {
  return (
    <div className="flex flex-col self-center max-w-full w-[255px]">
      <div className="text-4xl font-extrabold leading-none text-center text-lime-500">
        SANODERM
      </div>
      <div className="mt-1.5 text-sm text-sky-900">
        Modern Drug Discovery & Development
      </div>
    </div>
  );
}