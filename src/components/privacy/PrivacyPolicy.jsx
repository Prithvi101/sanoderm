import * as React from "react";
import { PolicySection } from "./PolicySection";
import { PolicyDivider } from "./PolicyDivider";
import { PolicyHeader } from "./PolicyHeader";
import { PolicyContent } from "./PolicyContent";
import { DownloadButton } from "./DownloadButton";

const downloadButtons = [
  "Download Privacy Notice Recruitment",
  "Download Privacy Notice - Employees and Contractors",
];

export function PrivacyPolicy() {
  return (
    <div className="flex overflow-hidden flex-col items-center bg-zinc-50">
      <div className="overflow-hidden self-stretch px-16 py-20 w-full text-4xl font-black text-green-800 bg-neutral-950 max-md:px-5 max-md:max-w-full">
        Privacy Policy
      </div>

      <div className="flex flex-col mt-10 max-w-full w-[1040px]">
        <PolicyHeader
          title="Sanoderm Privacy Policy"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/70bdb9b3ce8f54ce7368738279f63187f6e255fb70757303e96f78ebc4bdb102?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
        />

        <PolicyContent />

        <PolicySection title="Information we may collect from you">
          <div className="leading-loose">
            We may collect and process the following data about you:
          </div>
          <div className="mt-2">
            Information that you provide by filling in forms on our site
            www.sanoderm.com. This includes information provided at the time of
            registering to use our site, subscribing to our service or
            requesting further services. We may also ask you for information
            when you report a problem with our site.
          </div>
        </PolicySection>

        <PolicyDivider />

        <PolicyHeader
          title="Privacy Notice - Recruitment Candidates"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b80948763dc7654c5b44ca2a35682424d4df372b22dae9e178d5ff2cfaee6187?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
        />

        <PolicyDivider />

        <PolicyHeader
          title="Privacy Notice for Employees and Contractors"
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b80948763dc7654c5b44ca2a35682424d4df372b22dae9e178d5ff2cfaee6187?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
        />

        <PolicyDivider />

        <div className="flex flex-wrap gap-8 items-center mt-10 text-base font-light text-center">
          {downloadButtons.map((text, index) => (
            <DownloadButton key={index} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
}
