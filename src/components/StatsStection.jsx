import * as React from "react";
import StatCard from "./StatCard";

const statsData = [
  {
    number: "5",
    description: "Drugs in our pipeline",
  },
  {
    number: "13",
    description: "Patents and exclusive licenses",
  },
  {
    number: "15",
    description: "Innovation in markets valued at >$15m",
  },
];

function StatsSection() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-16 w-full bg-lime-600 bg-opacity-0 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start max-md:max-w-full">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            number={stat.number}
            description={stat.description}
          />
        ))}
      </div>
    </div>
  );
}

export default StatsSection;
