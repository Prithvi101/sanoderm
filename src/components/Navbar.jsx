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
  },
  { text: "Nanomedicine", bgColor: "bg-sky-700" },
  { text: "Clinical Trials", bgColor: "bg-sky-900" },
  { text: "Careers", bgColor: "bg-sky-700" },
  { text: "News", bgColor: "bg-green-900" },
  { text: "Blog", bgColor: "bg-lime-600" },
  { text: "Contact", bgColor: "bg-green-900" },
  { text: "About", bgColor: "bg-lime-600" },
];

function Navbar() {
  return (
    <div className=" flex flex-col items-center p-5 justify-center">
      <Header></Header>

      <div className="flex flex-row items-center  mt-9 w-full text-base leading-none text-white bg-blue-500  max-w-[1280px] max-md:max-w-full">
        {navigationItems.map((item, index) => (
          <Link key={index} href={item?.link || "/"}>
            <NavigationItem
              text={item.text}
              bgColor={item.bgColor}
              hasDropdown={item.hasDropdown}
            />
          </Link>
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
