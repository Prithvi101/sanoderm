import * as React from "react";

export function TineaPedisHero() {
  return (
    <div className="flex overflow-hidden flex-col grow shrink justify-center items-end px-16 py-12 bg-neutral-950 w-[1152px] max-md:px-5 max-md:max-w-full">
      <div className="w-full max-w-[1130px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:max-w-full">
              <div className="self-start text-4xl font-black text-green-800">
                Tinea Pedis
              </div>
              <div className="mt-12 text-xl font-light leading-6 text-green-500 max-md:mt-10 max-md:max-w-full">
                Many patients suffering from onychomycosis also have tinea pedis
                (athlete's foot), a common contagious fungal infection of the
                skin of the feet, especially the spaces between the toes.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c4fdb6e4850ec28845aaa3f726b510956b9cef3fc7a23eb5086dc25a4624141?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
              className="object-contain grow w-full aspect-[1.24]"
              alt="Tinea Pedis illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
