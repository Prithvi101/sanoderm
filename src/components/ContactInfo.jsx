import * as React from "react";

export function ContactInfo() {
  return (
    <div className="flex flex-col items-start w-full text-base font-light leading-none text-green-500 max-md:mt-10">
      <div className="flex gap-3 items-center font-bold text-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/556761a90387cff29b90c5ce1e83a6c7ff37edc1389dfd13b5207764cab70b9e?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <div className="self-stretch my-auto">
          <a
            href="tel:01625238776"
            className="font-light text-green-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            01625 238776
          </a>
        </div>
      </div>
      <div className="flex gap-3 items-center mt-7 text-center whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a7d2c3025b2702b27373466a71704bd9b2d08c7ba5a43d0250f90d88459724c?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
        />
        <div className="self-stretch my-auto">
          info@blueberrytherapeutics.com
        </div>
      </div>
      <div className="flex gap-3 items-start self-stretch mt-7 w-full leading-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/22071818861118c50d1bebda1efa2d7bba798e101d351bafac3592288e17963f?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
          alt=""
          className="object-contain shrink-0 w-5 aspect-square"
        />
        <div className="w-[295px]">
          Sanoderm Ltd, Mereside, Alderley Park, Nether Alderley, Macclesfield,
          Cheshire, SK10 4TG.
        </div>
      </div>
    </div>
  );
}
