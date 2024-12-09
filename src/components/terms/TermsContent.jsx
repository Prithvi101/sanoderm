import * as React from "react";

export function TermsContent({ title, content, isLast }) {
  return (
    <div className="flex flex-col mt-10 w-full max-md:max-w-full">
      <div className="text-2xl font-medium text-green-800 max-md:max-w-full">
        {title}
      </div>
      <div className="flex flex-col mt-2 w-full text-lg font-light leading-7 text-stone-500 max-md:max-w-full">
        {Array.isArray(content) ? (
          content.map((paragraph, index) => (
            <div
              key={index}
              className={
                index > 0 ? "mt-4 max-md:max-w-full" : "max-md:max-w-full"
              }
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))
        ) : (
          <div
            className="flex-1 shrink gap-2 self-stretch w-full"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
      </div>
    </div>
  );
}
