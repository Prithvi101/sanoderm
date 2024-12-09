import * as React from "react";

function ContactImage() {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41abd8be36c1245171613471f04ec11c9ef67ef6194600e221bfde5e2be366c7?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
        alt="Sanoderm contact visual"
        className="object-contain grow w-full aspect-[1.24] max-md:max-w-full"
      />
    </div>
  );
}

export default ContactImage;
