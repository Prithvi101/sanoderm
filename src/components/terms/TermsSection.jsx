import * as React from "react";
import { TermsContent } from "./TermsContent";

export function TermsSection({ terms }) {
  return (
    <div className="flex flex-col self-center mt-20 max-w-full w-[1040px] max-md:mt-10">
      {terms.map((term, index) => (
        <TermsContent
          key={index}
          title={term.title}
          content={term.content}
          isLast={index === terms.length - 1}
        />
      ))}
      <div className="mt-10 w-full text-lg leading-loose text-black max-md:max-w-full">
        Thank you for visiting our site.
      </div>
    </div>
  );
}
