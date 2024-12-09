import * as React from "react";

function StatCard({ number, description }) {
  return (
    <div className="flex gap-4 items-start min-w-[240px]">
      <div className="text-4xl font-bold leading-none text-center text-teal-400">
        {number}
      </div>
      <div className="text-2xl font-medium leading-8 text-lime-600">
        {description}
      </div>
    </div>
  );
}

export default StatCard;
