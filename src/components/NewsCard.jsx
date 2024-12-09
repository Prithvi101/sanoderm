import * as React from "react";

export default function NewsCard({ date, title, content }) {
  return (
    <div className="flex gap-6 self-stretch my-auto min-h-[268px] min-w-[240px] w-[315px]">
      <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px]">
        <div className="flex flex-col flex-1 w-full">
          <div className="text-sm leading-none text-zinc-500">{date}</div>
          <div className="flex flex-col flex-1 mt-3 w-full">
            <div className="text-lg font-semibold leading-7 text-lime-600">
              {title}
            </div>
            <div className="mt-2 text-base leading-6 text-black">
              <span className="font-light">{content}</span>
              <span className="font-light text-black">Continued</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}