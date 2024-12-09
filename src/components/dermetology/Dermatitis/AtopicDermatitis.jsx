import * as React from "react";

function SectionHeader({
  title,
  description,
  textColorTitle = "text-sky-700",
  textColorDesc = "text-cyan-400",
}) {
  return (
    <div className="flex flex-col mb-0 max-w-full w-[516px] max-md:mb-2.5">
      <div className={`self-start text-4xl font-black ${textColorTitle}`}>
        {title}
      </div>
      <div
        className={`mt-2.5 text-xl font-light leading-6 ${textColorDesc} max-md:max-w-full`}
      >
        {description}
      </div>
    </div>
  );
}

function ContentSection({
  title,
  mainText,
  description,
  bgColor = "bg-zinc-50",
}) {
  return (
    <div
      className={`flex overflow-hidden flex-col justify-center items-center p-20 w-full font-light text-center text-sky-700 ${bgColor} max-md:px-5 max-md:max-w-full`}
    >
      <div className="flex flex-col max-w-full w-[816px]">
        <div className="self-center text-4xl font-semibold max-md:max-w-full">
          {title}
        </div>
        <div className="mx-4 mt-10 text-2xl leading-8 max-md:mr-2.5 max-md:max-w-full">
          {mainText}
        </div>
        <div className="mt-6 text-xl leading-6 text-stone-500 max-md:max-w-full">
          {description}
        </div>
      </div>
    </div>
  );
}

export function AtopicDermatitis() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex overflow-hidden flex-col justify-center items-start px-20 py-36 w-full bg-slate-900 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <SectionHeader
          title="Atopic dermatitis"
          description="Atopic dermatitis is a chronic, inflammatory disease of the skin affecting up to 20% of children and 3% of adults, with an increasing prevalence in industrialised countries."
        />
      </div>

      <ContentSection
        title="Understanding Atopic Dermatitis"
        mainText="Atopic dermatitis or atopic eczema is a multifactorial disease and its pathophysiology has been linked to (genetic) modification of skin barrier function, bacterial colonisation and inflammation."
        description="Atopic dermatitis patients complain of dry, inflamed, and itchy skin that typically affects the face, inside of the elbows and back of the knees. Treatments for mild cases focus on symptom relief and general skin care. For those with moderate to severe disease, topical (applied to the skin) corticosteroids are the mainstay of treatment, but there are risks associated with their long-term use. Topical calcineurin inhibitors have been used since 2000/2001 for adults and children older than 2 years with moderate to severe atopic dermatitis who are not adequately responsive to or are intolerant of conventional therapies such as topical corticosteroids. However, some patients using topical calcineurin inhibitors experience stinging sensation at the site of application, and there are other safety risks linked with them. Therefore, there remains a need for better topical treatments that meet patient needs across the spectrum of atopic dermatitis."
      />

      <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-32 w-full bg-slate-900 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="mb-0 ml-7 w-full max-w-[1091px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="self-start text-4xl font-semibold text-sky-700 max-md:max-w-full">
                  Innovative Treatment Development
                </div>
                <div className="mt-4 text-xl font-light leading-6 text-cyan-400 max-md:max-w-full">
                  Sanoderm is developing a new treatment for atopic dermatitis
                  (BB1511) that is a light cream formulation designed to support
                  skin barrier function whilst reducing the inflammation
                  associated with atopic dermatitis, which we hope will help
                  many patients in managing their disease more effectively.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1abb8c372c357ab57d3d8e76dc43b9cff9d50b890d9fac41321dd2ef89e65a1e?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
                alt="Atopic dermatitis treatment illustration"
                className="object-contain grow w-full aspect-[1.47] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
