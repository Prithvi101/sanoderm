import * as React from "react";

export function PolicySection({ title, children }) {
  return (
    <div className="flex flex-col mt-10 w-full max-md:max-w-full">
      <div className="text-2xl font-medium text-green-800 max-md:max-w-full">
        {title}
      </div>
      <div className="flex flex-col justify-center mt-2 w-full text-lg font-light leading-7 text-stone-500 max-md:max-w-full">
        {children}
      </div>
    </div>
  );
}
