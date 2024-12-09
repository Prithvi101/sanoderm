import * as React from "react";
import { DownloadButton } from "./DownloadButton";

export function JobsHero() {
  return (
    <div className="flex flex-col text-center">
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-36 w-full bg-slate-900 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col items-center mb-0 max-w-full w-[621px] max-md:mb-2.5">
          <div className="flex flex-col items-center self-stretch max-md:max-w-full">
            <h1 className="text-4xl font-black text-sky-700 max-md:max-w-full text-center ">
              Jobs at Sanoderm
            </h1>
            <p className="mt-2.5 text-xl font-light leading-6 text-cyan-400 max-md:max-w-full">
              If you feel you have something unique to offer, we are always
              interested in talking to highly skilled people in our field and
              for the right person a role may be created.
            </p>
          </div>
          <DownloadButton />
          <p className="mt-4 text-base font-light text-white">
            (If you contact us in relation to job vacancies)
          </p>
        </div>
      </div>
    </div>
  );
}
