import ManagementHero from "@/components/management/ManagmentHero";
import { TeamSection } from "@/components/management/TeamSection";
import React from "react";

function page() {
  return (
    <div>
      <ManagementHero></ManagementHero>
      <TeamSection></TeamSection>
    </div>
  );
}

export default page;
