import * as React from "react";
import { ProfileCard } from "./ProfileCard";
import { AdvisorCard } from "./AdvisorCard";
import { boardMembers, advisors, observers } from "./boardMembers";

export function BoardSection() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center p-20 w-full bg-zinc-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[930px]">
        {boardMembers.map((member, index) => (
          <div
            key={member.name}
            className={`${
              index > 0 ? "mt-10" : ""
            } bg-slate-50 max-md:max-w-full`}
          >
            <ProfileCard {...member} />
          </div>
        ))}

        <div className="mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              >
                <AdvisorCard {...advisor} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {observers.slice(0, 2).map((observer) => (
              <div
                key={observer.name}
                className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
              >
                <AdvisorCard {...observer} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col px-6 pt-10 pb-28 mt-10 max-w-full border-b border-cyan-400 bg-slate-50 w-[450px] max-md:px-5 max-md:pb-24">
          <AdvisorCard {...observers[2]} />
        </div>
      </div>
    </div>
  );
}
