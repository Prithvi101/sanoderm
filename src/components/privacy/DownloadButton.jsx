import * as React from "react";

export function DownloadButton({ text }) {
  return (
    <button className="gap-2 self-stretch px-6 py-4 my-auto bg-lime-600 min-w-[240px] max-md:px-5 text-white text-base font-light">
      {text}
    </button>
  );
}
