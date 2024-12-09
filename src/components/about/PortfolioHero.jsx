import * as React from "react";

function PortfolioHero() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center p-20 w-full text-center bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[593px]">
        <h1 className="self-center text-4xl font-black text-green-800">
          Sanoderm Portfolio
        </h1>
        <p className="mt-2.5 text-2xl font-light leading-8 text-green-500 max-md:max-w-full">
          Sanoderms' vision is to bring high value, innovative medicines to the
          market that make a real difference to people's lives.
        </p>
      </div>
    </div>
  );
}

export default PortfolioHero;
