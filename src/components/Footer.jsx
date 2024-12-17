import * as React from "react";
import { ContactInfo } from "./ContactInfo";
import { FooterLinks } from "./FooterLinks";

export function Footer() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center p-20 w-full bg-neutral-950 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1040px] max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <ContactInfo />
            </div>
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <FooterLinks />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 justify-between items-center mt-14 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col self-stretch my-auto text-xs leading-none text-white w-[235px] text-start">
            <div className="flex relative flex-col text-4xl  font-extrabold leading-none text-start text-lime-500 ">
              SANODERM
            </div>
            <div>Innovative Therapeutics in Dermatology</div>
          </div>
          <div className="self-stretch my-auto text-sm font-light leading-none text-green-500">
            © Sanoderm Ltd is registered in England & Wales number 12860581
          </div>
        </div>
      </div>
    </div>
  );
}
