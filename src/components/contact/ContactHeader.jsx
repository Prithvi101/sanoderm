import * as React from "react";

function ContactHeader() {
  return (
    <div className="flex flex-wrap gap-6 items-center px-10 text-4xl font-semibold text-green-800 max-md:px-5">
      <div className="flex flex-1 shrink self-stretch my-auto h-px bg-green-800 basis-0 w-[101px]" />
      <div className="self-stretch my-auto">Get In Touch</div>
      <div className="flex flex-1 shrink self-stretch my-auto h-px bg-green-800 basis-0 w-[100px]" />
    </div>
  );
}

export default ContactHeader;
