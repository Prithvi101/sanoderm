import * as React from "react";
import { TermsHeader } from "./TermsHeader";
import { TermsSection } from "./TermsSection";
import { termsData } from "./termsData";

export default function TermsAndConditions() {
  return (
    <div className="flex overflow-hidden flex-col bg-zinc-50">
      <TermsHeader />
      <TermsSection terms={termsData} />
    </div>
  );
}
