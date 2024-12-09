import * as React from "react";

const links = [
  {
    title: "Overview",
    items: [
      "Home",
      "Latest News",
      "Blog Articles",
      "Nanomedicine",
      "Clinical Trials",
    ],
  },
  {
    title: "About Blueberry",
    items: ["Blueberry Portfolio", "Management Team", "Board of Directors"],
  },
  {
    title: "Dermatology",
    items: [
      "Onychomycosis",
      "Tinea Pedis",
      "Atopic Dermatitis",
      "Other Conditions",
    ],
  },
  {
    title: "Contact Blueberry Therapeutics",
    items: ["Job Vacancies", "Terms & Conditions", "Privacy Policy"],
  },
];

export function FooterLinks() {
  return (
    <div className="flex flex-wrap gap-10 items-start max-md:mt-10 max-md:max-w-full">
      {links.map((section, index) => (
        <div key={index} className="flex flex-col">
          <div className="text-lg font-semibold leading-none text-teal-400">
            {section.title}
          </div>
          <div className="flex flex-col mt-7 text-sm font-medium leading-none text-green-500">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className={itemIndex > 0 ? "mt-7" : ""}>
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
