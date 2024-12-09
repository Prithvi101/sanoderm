import * as React from "react";

function ContactInfo({ contactData }) {
  return (
    <>
      <div className="self-center mt-20 text-2xl font-light leading-10 text-center text-stone-500 w-[342px] max-md:mt-10">
        {contactData.address.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center px-4 py-3 mt-24 w-full text-lg leading-none text-center text-lime-600 bg-green-50 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-2 items-center self-stretch my-auto font-light whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/826482f92317252a38239c32e163f8d151b69bb3db5437f5585a08e14203afb2?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <div className="self-stretch my-auto">{contactData.email}</div>
        </div>
        <div className="flex shrink-0 self-stretch my-auto w-px h-6 bg-neutral-950" />
        <div className="flex gap-2 items-center self-stretch my-auto font-bold">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb449552a3e1223a1a2bef0d473487df1e3c85044d5e785ed6616f8d6bea2291?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <div className="self-stretch my-auto">
            <a
              href={`tel:${contactData.phone.replace(/\s/g, "")}`}
              className="font-light text-lime-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactData.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
