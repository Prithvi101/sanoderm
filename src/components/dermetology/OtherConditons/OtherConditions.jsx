import * as React from "react";

function OtherConditions() {
  const sectionData = {
    title: "Other conditions",
    description:
      "Sanoderm has products in the pipeline for the treatment of acne vulgaris and for other common dermatological conditions. These are also based on our nanodelivery platform technology to enhance the topical delivery of existing active treatments.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0afb63a27f55eb77cbc50b7432f95390be9a8b67c05462d932229fd9baa42eb4?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9",
    imageAlt:
      "Medical illustration showing various skin conditions and treatments",
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-12 w-full bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <ContentSection {...sectionData} />
    </div>
  );
}

export default OtherConditions;

function ContentSection({ title, description, imageSrc, imageAlt }) {
  return (
    <div className="flex flex-row gap-5 justify-between w-full max-w-[1040px] max-md:max-w-full">
      <div className="flex flex-col my-auto max-md:max-w-full">
        <div className="self-start text-4xl font-black text-green-800 flex ">
          {title}
        </div>
        <div className="mt-2.5 text-xl font-light leading-6 text-green-500 max-md:max-w-full">
          {description}
        </div>
      </div>
      <img
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        className="object-contain w-full aspect-[0.86]"
      />
    </div>
  );
}
