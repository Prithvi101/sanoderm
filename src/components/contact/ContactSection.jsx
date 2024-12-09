import * as React from "react";
import ContactInfo from "./ContactInfo";
import ContactHeader from "./ContactHeader";
import ContactImage from "./ContactImage";

function ContactSection() {
  const contactData = {
    email: "info@sanoderm.com",
    phone: "01625 238776",
    address: [
      "Sanoderm,",
      "Mereside, Alderley Park,",
      "Nether Alderley, Macclesfield",
      "Cheshire, SK10 4TG.",
    ],
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-hidden px-16 py-20 w-full text-4xl font-black text-center text-green-800 bg-neutral-950 max-md:px-5 max-md:max-w-full">
        Contact Sanoderm
      </div>
      <div className="flex overflow-hidden flex-col items-center px-16 w-full bg-zinc-50 max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1040px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-6 w-full max-md:max-w-full">
                <ContactHeader />
                <ContactInfo contactData={contactData} />
              </div>
            </div>
            <ContactImage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
