import Image from "next/image";
import * as React from "react";

export function TeamMemberCard({ name, role, image, description }) {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
        <div className="flex relative flex-col pt-80 text-center text-sky-700 aspect-square max-md:pt-24 max-md:mt-6">
          <Image
            width={400}
            height={400}
            loading="lazy"
            src={image}
            alt={`Portrait of ${name}`}
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col justify-center px-20 py-2 bg-cyan-400 max-md:px-5">
            <div className="flex flex-col items-start">
              <div className="text-xl font-black">{name}</div>
              <div className="mt-1 text-base font-light leading-none">
                {role}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
        <div className="self-stretch my-auto text-lg font-light leading-7 text-stone-500 max-md:mt-10 max-md:max-w-full">
          {description}
        </div>
      </div>
    </div>
  );
}
