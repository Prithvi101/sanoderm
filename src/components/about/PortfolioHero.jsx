import * as React from "react";
import "../../app/globals.css"; // Ensure you're importing the global CSS

function PortfolioHero() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center p-20 w-full text-center bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[593px]">
        <h1 className="self-center text-4xl main-font  text-[#007C12]">
          Sanoderm Portfolio{" "}
        </h1>
        <p className="mt-2.5 text-2xl font-light leading-8 text-[#00F800] max-md:max-w-full">
          Sanoderms’ platform of dermatology focused assets
        </p>
      </div>
    </div>
  );
}

export default PortfolioHero;
