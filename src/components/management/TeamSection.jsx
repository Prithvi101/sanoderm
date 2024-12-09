import * as React from "react";
import { TeamMemberCard } from "./TeamMemberCard";
import { teamMembers } from "./TeamData";

export function TeamSection() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center p-20 w-full bg-zinc-50 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[930px]">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className={`${
              index > 0 ? "mt-10" : ""
            } bg-slate-50 max-md:max-w-full`}
          >
            <TeamMemberCard {...member} />
          </div>
        ))}
      </div>
    </div>
  );
}
