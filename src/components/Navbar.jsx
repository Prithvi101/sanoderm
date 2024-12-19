"use client";
import React from "react";
import NavigationItem from "./NavigationItem";
import Header from "./Header";
import Link from "next/link";

const navigationItems = [
  { text: "Home", bgColor: "bg-lime-600", link: "/" },
  {
    text: "Dermatology",
    bgColor: "bg-sky-900",
    hasDropdown: true,
    dropDownItems: [
      {
        text: "Atopic Dermatitis",
        bgColor: "bg-sky-700",
        link: "/dermetology/AtopicDermatitis",
      },
      {
        text: "Onychomycosis",
        bgColor: "bg-sky-700",
        link: "/dermetology/Onychomycosis",
      },
      {
        text: "Tinea Pedis",
        bgColor: "bg-sky-700",
        link: "/dermetology/TineaPedis",
      },
      {
        text: "Other Conditions",
        bgColor: "bg-sky-700",
        link: "/dermetology/OtherConditions",
      },
    ],
  },
  { text: "Nanomedicine", bgColor: "bg-sky-700", link: "/nanomedicine" },
  { text: "Clinical Trials", bgColor: "bg-sky-900", link: "/clinical-trials" },
  { text: "Careers", bgColor: "bg-sky-700", link: "/careers" },
  { text: "Contact", bgColor: "bg-green-900", link: "/contact" },
  { text: "About", bgColor: "bg-lime-600", link: "/about" },
  { text: "Managment", bgColor: "bg-sky-700", link: "/about/managment" },
];

function Navbar() {
  return (
    <div className=" flex flex-col items-center p-5 justify-center">
      <Header></Header>

      <div className="flex flex-row items-center  mt-9 w-full text-base leading-none text-white justify-center   max-w-[1280px] max-md:max-w-full">
        {navigationItems.map((item, index) => (
          <NavigationItem
            text={item.text}
            key={index}
            bgColor={item.bgColor}
            hasDropdown={item.hasDropdown}
            dropDownItems={item?.dropDownItems}
            link={item?.link}
          />
        ))}

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab7402f3967ea35663d8baaadc23c9c75b91b9d77c697d61a266b9f7c803e698?placeholderIfAbsent=true&apiKey=2b44f754f55f493a80610f16cd61c8e9"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.16] w-[72px]"
        />
      </div>
    </div>
  );
}

export default Navbar;
